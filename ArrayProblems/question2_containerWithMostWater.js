'use strict';

/*
	Given an array of non-negative integers representing a line height, find two lines which forms a container that contains the most water.
*/
function findContainer(arr) {
	if (arr === null || arr.length === 0) {
		return -1;
	}

	var start = 0;
	var end = arr.length - 1;
	var max = 0;
	var base = 0;
	var height = 0;
	var current = 0;
	var lines = [];

	while (start < end) {
		base = end - start;
		height = Math.min(arr[start], arr[end]);
		current = base * height;

		if (current > max) {
			max = current;
			lines[0] = arr[start];
			lines[1] = arr[end];
		}

		if( arr[start] <= arr[end] )
			start += 1;
		else
			end -= 1;
	}

	return lines;
};
