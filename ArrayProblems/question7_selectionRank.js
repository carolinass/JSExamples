'use strict';

/*
	Find the kth largest element in an unsorted array.
	For example, if the array is [7, 0, -9, 5, 4] and k = 2, return 7.
*/
function findKthLargest(arr, k) {
	if (arr === null || typeof arr === "undefined" || arr.length === 0 || k > arr.length) {
		return;
	}
	return findKth(arr, arr.length - k + 1, 0, arr.length - 1);
};

function findKth(arr, k, start, end) {
	if (start === end) {
		return arr[start];
	}
	var l = start;
	var r = end;
	var mid = arr[parseInt((start + end)/2)];

	while(true) {
		while (arr[l] < mid) {
			l += 1;
		}
		while(arr[r] > mid) {
			r -= 1;
		}
		if (l >= r) {
			break;
		}
		arr = swap(arr, l, r);
	}

	if (l === r) l += 1;

	if (k <= l) 
		return findKth(arr, k, start, r);
	else 
		return findKth(arr, k, l, end);
};

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
};
