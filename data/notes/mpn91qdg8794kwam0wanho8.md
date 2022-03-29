
# Binary Search

## Preconditions

- It is possible to rule out half of the solution space at each step. Though this usually means a sorted array, it can be used outside of that context too.

## Implementation

```python
def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        # using (l + r) // 2 could cause an overflow
        m = l + (u - l) / 2
        if arr[m] < t:
            l = m+1
        elif arr[m] == t:
            return m
        else:
            r = m - 1
    return -1
```

## Problems

- [Find minimum in rotated sorted array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/): focus on the endpoints of the array
- [Integer square root](https://leetcode.com/problems/sqrtx/): the set of integers is sorted, which can be used to narrow the solution down
