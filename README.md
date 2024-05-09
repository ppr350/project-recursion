# project-recursion
A project designed to tackle recursion by solving fibonacci sequence and merge sort

## Fibonacci



## Merge Sort
Merge sort is an important part of Computer Science. It is an algorithm which uses the “Divide and Conquer” approach of recursion. It is essential a sorting algorithm recurses through an array of unsorted data until it reaches its smallest sub-set - a single item. A single item is considered sorted, Merge Sort then merges the single items back together in sorted order.

###  In pseudocode:
    Sort the left half of the array (assuming n > 1)
	Sort the tight half of the array (assuming n > 1)
	Merge the two halves together

“If only one number
	Quit
Else
	Sort left half of numbers
	Sort right half of numbers
	Merge sorted halves”

### Approach
1. Declare a function called "mergeSort" and a helper function called "merge".
2. "mergeSort takes 1 parameter of array.
3. "merge" takes 2 parameters - the left half and the right half of the array which was sent by "mergeSort".
4. Inside "mergeSort", the function first check if the array length is more than 1, if it's less than 1, it'll return the array because it is the smallest it can be broken down. This is the base case.
5. If the array length is more than 1, the function then divides the array into 2 parts.
6. The function then calls "merge" function and pass it the left half and the right half of the array to the parameter of "merge" function.
7. "merge" function creates an empty array ready for use.
8. It then compares the left most of the left half and the right most of the right half, smaller one gets pushed to the array.
9. This process continues until the left half and right half are empty.
10. There are then be returned.