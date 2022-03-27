
# Binary Search

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
