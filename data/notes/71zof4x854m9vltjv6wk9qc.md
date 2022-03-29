
# Two Pointers

Two pointers is a problem solving technique where two pointers are moved to find the solution.

## Preconditions

- Finding two values that meet a certain criteria (e.g, two numbers that add to a given value, two points of an array)
- Data is ordered in some way, or it is possible to move closer to a solution by moving one / both pointers

## Example problems

- [3Sum](https://leetcode.com/problems/3sum/): sort the array. For each element, we want to find two other numbers so that the sum of all 3 add to zero. To find the two numbers, initialize two pointers at the start and end of the array, moving the left / right pointer depending on whether a smaller or larger sum is needed.
- The [two sum problem](https://leetcode.com/problems/two-sum/) can also be solved with this approach, but in that case, using a hash table is an easier solution.
- [Container with most water](https://leetcode.com/problems/container-with-most-water/)
