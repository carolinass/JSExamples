'use strict';

/*
	A sorted array is rotated. Find an element in the array.
	You may assume no duplicate exists in the array. For instance, find 7 in [4, 5, 6, 7, 0, 1, 2].
*/
function findElement(arr, n) {
	if(arr === null || arr.length === 0) {
		return;
	}

	var start = 0;
	var end = arr.length - 1;
	var mid = 0;

	while (start <= end) {
		mid = parseInt( (start + end)/2 );

		if (arr[mid] === n) {
			return mid;
		}

		if (arr[start] < arr[mid]) {
			if (arr[start] <= n && arr[mid] > n) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		} else if (arr[mid] < arr[end]) {
			if (arr[mid] < n && arr[end] >= n) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		} else if (arr[start] === arr[mid]) {
			start = mid + 1;
		} else if (arr[end] === arr[mid]) {
			end = end - 1;
		}
	}

	return -1;
};
