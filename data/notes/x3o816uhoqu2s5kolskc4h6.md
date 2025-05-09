
# Algorithms & Data Structures Technical Interview Cheatsheet

The first step to solving Leetcode problems in interviews is to know commonly used data structures and algorithms by heart - being able to write a bug-free DFS implementation without having to think about it for example. This frees up mental capacity to focus on the problem, and figuring out which preconditions and desired outputs of the algorithms you know are best for that problem.

This cheatsheet helps by providing reference implementations to memorize.

## Two Pointers

Preconditions: one or more arrays or linked lists

Outcome: finding a set of elements that meet a certain criteria (pair / triplet / subarray), iterating over parts of the array/list simultaneously or iterating over array/string from both ends, or modifying the array

```python
def is_palindrome(s):
    if not s:
        return True
    left, right = 0, len(s) - 1
    while left <= right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
```

## Sliding Window

Preconditions: array, string or linked list, expanding/contracting a continuous window of elements

Outcome: calculate something based on contiguous subarrays or sublists of a given size k, k may vary depending on problem constraints e.g, optimization or finding length

```python
def longest_substring_with_k_distinct(s, k):
    window_start = 0
    max_length = 0
    char_frequency = {}

    for window_end in range(len(s)):
        right_char = s[window_end]
        char_frequency[right_char] = char_frequency.get(right_char, 0) + 1

        # Shrink window until we have at most k distinct characters
        while len(char_frequency) > k:
            left_char = s[window_start]
            char_frequency[left_char] -= 1
            if char_frequency[left_char] == 0:
                del char_frequency[left_char]
            window_start += 1

        max_length = max(max_length, window_end - window_start + 1)

    return max_length
```

## Fast and slow pointers

Precondition: sequence to iterate over, fast and slow pointers eventually meet, or fast pointer reaches the end

Output: cycle finding and start of a cycle in a linked list, finding middle of a sequence or the nth element from the end

```python
# Cycle detection in a linked list
def has_cycle(head):
    if not head or not head.next:
        return False

    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next  # Move one step
        fast = fast.next.next  # Move two steps

        if slow == fast:  # Found cycle
            return True

    return False  # No cycle found
```

```python
# Finding middle of a linked list
def find_middle(head):
    if not head:
        return None

    slow = fast = head
    while fast and fast.next:
        slow = slow.next  # Move one step
        fast = fast.next.next  # Move two steps

    return slow  # When fast reaches end, slow is at middle
```

## Binary Search

- Time complexity: `O(log n)`
- Space complexity: `O(1)`

This is a standard binary search that returns the index of a specific element in a sorted array, and -1 if it is not found.

```python
def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        # using (l + r) // 2 could cause an overflow
        m = l + (r - l) // 2
        if arr[m] < target:
            l = m+1
        elif arr[m] == target:
            return m
        else:
            r = m - 1
    return -1
```

However, most binary search problems are more complex. For example, finding the smallest number greater than or equal to the target. This requires a [more flexible template](https://leetcode.com/discuss/post/786126/python-powerful-ultimate-binary-search-t-rwv8/).

Precondition: there is a predicate function `p` that satisfies a monotonic condition; the search space can be divided into two regions such that for all elements in one region, it returns false and for all elements in the other region, it returns true.

Outcome: the index of the minimum element that satisfies the predicate

```python
def lower_bound_binary_search(array) -> int:
    left, right = min(search_space), max(search_space) # could be [0, n], [1, n] etc. Depends on problem
    while left < right:
        mid = left + (right - left) // 2
        if p(mid):
            right = mid
        else:
            left = mid + 1
    return left
```

To use this template:

1. Correctly initialize `left` and `right` (i.e, the search space), ensuring our target is within that range
2. The `left` index returned is the smallest index of an element that satisfies p. Important: may have to verify that this is an element that satisfies our search condition before returning
3. Design the predicate `p`, this is the hardest part

## Graph Algorithms

Let `v` be the number of vertices in the graph, and `e` the number of edges.

Here, `graph` is an adjacency list. For example: {0: [2, 3], 1: 2} means node 0 is connected to 2 and 3, node 1 is connected to 2.

A tree is a graph of `n` nodes without cycles and has `n-1` edges.

### Breadth-first search (BFS)

- Time complexity: `O(v + e)`
- Space complexity: `O(v)`

Precondition: Need to explore all neighbors before moving outward, solution is near the starting node

Outcome: traversal starting from the source node in order of distance, level order of a tree, shortest path in an unweighted graph

```python
from collections import deque

def bfs(graph, start):
    # start is a single node, but could also be a list of starting sources for a multi-source BFS
    q = deque([start])
    visited = set([start])
    while q:
        node = q.popleft()
        # process node if needed
        for nei in graph[node]:
            if nei not in visited:
                visited.add(nei)
                q.append(nei)
```

### Depth-first Search (DFS)

- Time complexity: `O(v + e)`
- Space complexity: `O(v)`

Precondition: graph / tree, want to explore as far as possible along each branch before backtracking and solution is far from the start node, depth of path fits in the recursion stack

Outcome: graph exploration as far as possible down a path before backtracking, can be tweaked for topological sorting and cycle detection

```python
visited = set()
def dfs(graph, node):
    visited.add(node)
    # process node if needed
    for nei in graph[node]:
        if nei not in visited:
            dfs(graph, nei)
```

There is a deep connection between backtracking and DFS. Backtracking is an application of DFS on the state tree of a problem.

### Cycle Finding On Undirected Graphs

DFS's exploration as far down each path as possible is a natural fit for detecting cycles.

```python
visited = set()

def has_cycle(graph, cur, parent):
    if cur in visited:
        return True
    visited.add(cur)
    for nei in graph[cur]:
        # in an undirected graph, nodes u and v are connected with two edges: from u to v and v to u
        # prevent the back edge (i.e, where we came from) from being falsely reported as a cycle
        if nei == parent:
            continue
        if has_cycle(graph, nei, cur):
            return True
    return False

# To start the DFS, use a node that doesn't exist for the parent, e.g -1
```

### Cycle Finding On Directed Graphs

The definition of a cycle is different from that of undirected graphs, so requires distinguishing between fully processed (visited) nodes, or nodes in the current path being explored.

```python
UNVISITED = 0
EXPLORING=1
VISITED=2
# assuming the graph has n nodes
status = [UNVISITED for _ in range(n)]

def has_cycle(graph, cur):
    if status[cur] == EXPLORING:
        return True # we found a node that is already on our current path
    status[cur] = EXPLORING
    for nei in graph[cur]:
        if status[nei] != VISITED and has_cycle(graph, nei):
            return True
    status[cur] = VISITED
    return False
```

### Topological Sort

A topological sort is an ordering of vertices on a directed acyclic graph such that if there is a directed edge from u to v, u appears in the topological ordering before v. This is useful for problems that involve checking whether a set of task dependencies can be satisfied, and in which order the tasks should be done.

There are two algorithms for this.

The first method uses a DFS postorder traversal. By definition, reversing the postorder DFS traversal is a valid topological order.

```python
# this is virtually identical to using DFS for cycle finding, just with a few lines to compute the postorder traversal

UNVISITED = 0
EXPLORING=1
VISITED=2

# returns the topological sort, or [] if the graph has a cycle
def topological_sort(graph):
    # assuming the graph has n nodes
    status = [UNVISITED for _ in range(n)]
    postorder = []

    def has_cycle(cur):
        if status[cur] == EXPLORING:
            return True # we found a node that is already on our current path
        status[cur] = EXPLORING
        for nei in graph[cur]:
            if status[nei] != VISITED and has_cycle(graph, nei):
                return True
        status[cur] = VISITED
        postorder.append(cur)
        return False

    for vertex in graph.keys():
        if status[vertex] == UNVISITED and has_cycle(vertex):
            return []

    return list(reversed(postorder))
```

The second method is Kahn's algorithm, which uses BFS to incrementally build the topological order from nodes that have an in-degree of 0 (i.e, they have no dependencies).

```python
from collections import deque

def topological_sort_bfs(graph):
    # Calculate in-degree for each node
    in_degree = {node: 0 for node in graph}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] = in_degree.get(neighbor, 0) + 1

    # Start with nodes that have no dependencies (in-degree = 0)
    queue = deque([node for node in in_degree if in_degree[node] == 0])
    result = []

    # Process nodes in topological order
    while queue:
        node = queue.popleft()
        result.append(node)

        # Remove this node's influence
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            # If a node has no more dependencies, add it to queue
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # If result doesn't include all nodes, there's a cycle
    if len(result) != len(graph):
        return []  # Graph has a cycle

    return result
```

### Union Find

This is a relatively obscure data structure, which probably won't be encountered in interviews. Can still be useful to study if there is time for certain graph problems.

- Time complexity: `O(a(n))`, amortized constant time if path compression and union by rank / size are used
- Space complexity: `O(n)`

Precondition: undirected graph, efficient lookup for which set an element belongs to, efficient union

Outcome: cycle detection, counting components, can be processed incrementally

```python
# assuming there are n nodes / sets at the start
parent = [i for i in range(n+1)]
# this keeps track of the height of the tree
rank = [0] * (n+1)

# find the representative element for an item, i.e which set it belongs to
def find(n):
    if parent[n] != n:
        parent[n] = find(parent[n]) # path compression
    return parent[n]

def union(n1, n2):
    n1_root, n2_root = find(n1), find(n2)
    if n1_root == n2_root:
        return False # both elements are already in the same set
    # swap n1 and n2 to ensure that rank of n1 <= n2
    if rank[n1_root] > rank[n2_root]:
        n1_root, n2_root = n2_root, n1_root
    # make smaller set (n1_root) point to larger one
    parent[n1_root] = n2_root
    # update the ranks, which only need to change if n1 and n2 had equal ranks already
    if rank[n1_root] == rank[n2_root]:
        rank[n2_root] += 1
    return True
```

## Mergesort

Precondition: Able to use lots of memory, cannot tolerate a `O(n^2)` worst case scenario

Outcome: Sorted list

## Backtracking

Precondition: Problem can be solved by trying partial solutions and abandoning them when they can't lead to valid solutions

Outcome: All possible valid solutions to a problem, efficiently solving combinatorial problems (permutations, subsets, combinations)

```python
def backtrack_template(input_data):
    result = []

    def backtrack(current_state, remaining_choices):
        # Base case: reached a solution
        if is_solution(current_state):
            result.append(current_state.copy())  # Always make a copy!
            return

        # Try each available choice
        for choice in remaining_choices:
            # Skip invalid choices
            if not is_valid(current_state, choice):
                continue

            # Make the choice
            current_state.append(choice)

            # Recursive call
            backtrack(current_state, get_next_choices(remaining_choices, choice))

            # Undo the choice (backtrack)
            current_state.pop()

    backtrack([], input_data)
    return result
```

### Choose / Don't Choose Pattern

```python
# returns all possible subsets
def subsets(self, nums: List[int]) -> List[List[int]]:
    ans = []
    def backtrack(i, cur):
        if i == len(nums):
            ans.append(list(cur))
            return

        # don't choose this element
        backtrack(i+1, cur)

        # choose this element
        cur.append(nums[i])
        backtrack(i+1, cur)
        cur.pop()
    backtrack(0, [])
    return ans
```

### Subset / Combination Pattern

Another way to generate solutions is to explore all solutions that start with the first element, second element, etc. Very useful for subset / combination problems.

```python
def subsets(self, nums: List[int]) -> List[List[int]]:
    ans = []
    def backtrack(start, cur):
        ans.append(list(cur))
        for i in range(start, len(nums)):
            # if there is a need to remove duplicate solutions:
            # if i > start and nums[i] == nums[i-1]:
                # continue
            cur.append(nums[i])
            backtrack(i+1, cur)
            cur.pop()
    backtrack(0, [])
    return ans
```

## Dynamic Programming

Preconditions:

- Overlapping subproblems: The problem can be broken down into subproblems which are reused multiple times
- Optimal substructure: The optimal solution to the problem can be constructed from optimal solutions of its subproblems

Outcome: Efficient solutions to problems that would require exponential time with naive approaches

Two approaches:

1. **Top-down (memoization)**: Recursive with caching
2. **Bottom-up (tabulation)**: Iterative building from base cases

```python
# Top-down example: Fibonacci with memoization
memo = {}
def fibonacci_memo(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n

    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]
```

```python3
# Bottom-up example: Longest Increasing Subsequence
def longest_increasing_subsequence(nums):
    if not nums:
        return 0

    n = len(nums)
    # dp[i] = length of LIS ending at index i
    dp = [1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)
```

## Data Structures

You may have to use multiple data structures simultaneously to solve a problem, for example LRU Cache.

### Linked List

Preconditions: has pointer to node to manipulate in the linked list sequence, this could be its head or reference to nodes in the middle of the list

Outcome: O(1) insertion, deletion and removal of elements with a pointer to that node

### Heap

Preconditions: interested in repeatedly finding `k` out of `n` elements that meets some condition (largest, smallest etc), faster than `O(n log n)` running time, streaming data

Output: largest / smallest kth element in a stream, the k elements of interest, median

- Time complexity: `O(n)` to turn an existing array in-place into a heap, `O(log n)` for pop / push operations
- Space complexity: `O(n)` for the elements, the array's indices implicitly store the heap tree structure

### Stack

Preconditions: First in, last out

Outcome: Reverse list of elements

### Queue

Precondition: First in, first out

Outcome: first in, first out

### Trie

Preconditions: Multiple values that share sequential subvalues, O(n) lookup time

Outcome:  Efficient storage of all values, ability to find all values that share a common sequential prefix
