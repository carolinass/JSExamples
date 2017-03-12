'use strict';

/*
	Rotate an array by n steps. If the array is [1, 2, 3, 4, 5, 6, 7] and k = 3, the array becomes [5, 6, 7, 1, 2, 3, 4];
	Please note that k is larger than the length of the array.
*/
function rotateArray(arr, k) {
	if(arr === null || arr.length === 0) {
		return;
	}
	
	arr = reverseSubarray(arr, 0, arr.length - 1 - k);
	arr = reverseSubarray(arr, arr.length - k, arr.length - 1);
	return reverseSubarray(arr, 0, arr.length - 1);
};

function reverseSubarray(arr, start, end) {
	var temp;
	while(start < end) {
		temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start += 1;
		end -= 1;
	}
	return arr;
};

var a = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(a, 3));