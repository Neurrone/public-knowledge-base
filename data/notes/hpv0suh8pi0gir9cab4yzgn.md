
# Binary Search In Python

## Bisect Module

The bisect module implements functions for [[dev.algorithms.binary-search]]. If `arr` is a sorted list and `x` is the target value:

- `bisect.bisect_left(arr, x)`: returns the index of the first element that is not less than `x`. If all elements in `arr` are less than `x`, the return value is `len(arr)`
- `bisect.bisect_right(arr, x)`: returns the index of the first element that is greater than `x`. If all elements are <= `x`, returns `len(arr)`
