# project-recursion
A project designed to tackle recursion by solving fibonacci sequence and merge sort

# Understanding recursion
How recursion works (Inception style)

function pow(2, 3) {				// ‘x’ is 2 and ’n’ is 3 in this dream
	if (3 === 1) {					// ’n’ is 3 now
		return 2					// so this line is ignored
	} else {
		return  2 * pow(2, 2)		// pow(2  * (3 - 1))

				>>>> Let’s go one layer deeper >>>>>
						
						function pow(2, 2) {				// ‘x’ is 2 and ’n’ is 2 in this dream
							if (2 === 1) {					// ’n’ is 2 now
								return 2					// this line is still ignored
							} else {
								return 2 * pow(2, 1)		// pow(2 *  (2 - 1))

										>>>>> One more layer deeper here we go BRAAAAAM! >>>>>

												function pow(2, 1) {			// ‘x’ is 2 and ’n’  is now 1 in this dream
													if (1 === 1) {		 		// ’n’ is indeed 1 now
														return 2				// so this line executes
													}

										>>>>>> We’ll bring 2 to the previous layer >>>>>
						
							} else {
								return 2 * 2 				// we get the kick to bring us back to the previous layer, 4 is the kick!
							}

				>>>>>> Let’s bring 4 (the return result in this layer) back to the previous layer, no time to lose! >>>>>

	} else {
		return 2 * 4				// we get 8 in this main timeline! Mission accomplished!
	}


## Fibonacci
Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. This project is to use JavaScript for loop and recursion to calculate fibonacci sequence.

### In pseudocode:
	if n === 0 or n === 1 return n
	else fibsRec(n - 1) + fibsRec(n - 1)

### Approach (recursive)
1. Declare a function called "fibsRec" which takes 1 parameter.
2. first it has a base case inside the "if" statement, if the number passed in is 0 or 1, the number returns and stops there
3. If the number passed in is more than 1, the recursion happens.
4. The function calls itself twice, first call is passed in number minus 1, second call is passed in number minus 2.
5. When the recursive functions finally return, the function adds the two return values and returns it.

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

## Running the project in terminal using node command
To run fibonacci code, type:
node recursion.js

To run merge sort code, type:
node mergeSort.js

## Special Thanks
The Odin Project for providing such an amazing free online resource

Damon, tobyPlaysTheUke for guidance

Shamblonaut, BakedBeansOnToast, Sekolan on The Odin Project's Discord for verification

[Stepping Through Recursive Fibonacci Function by Khan Academy](https://www.youtube.com/watch?v=zg-ddPbzcKM&t=306s)

[Merge Sort - CS50 Shorts](https://www.youtube.com/watch?v=Ns7tGNbtvV4&t=160s)