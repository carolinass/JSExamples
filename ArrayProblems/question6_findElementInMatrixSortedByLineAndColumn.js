'use strict';

/*
	Given a sorted matrix (integers in each row are sorted from left to right and in each column are sorted from top to bottom),
	find whether this matrix contains a value.

	-111  -20  -3    4
	  5    6    9   18  
	 19   56   98   101

	 Searching for 6 returns true, 190 retuns false.
*/
function findElementInMatrix(matrix, n){
	if (typeof matrix === "undefined" || matrix === null || matrix.length === 0) {
		return false;
	}

	var row = 0;
	var column = matrix[row].length - 1;

	while (row <= matrix.length - 1 && column >= 0) {
		if (matrix[row][column] === n) {
			return true;
		} else if (matrix[row][column] > n) {
			column -= 1;
		} else {
			row += 1;
		}
	}

	return false;
};
