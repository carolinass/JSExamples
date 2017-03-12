'use strict';

/*
	Given a matrix, print all values in spinal order.
	Example:
	1 2 3
	4 5 6
	7 8 9

	Print out: 1, 2, 3, 6, 9, 8, 7, 4, 5
*/
function printMatrix(matrix) {
	if(matrix === null || typeof matrix === 'undefined' || matrix.length === 0) {
		return;
	}

	var borderTop = 0;
	var borderRight = matrix[0].length - 1;
	var borderBottom = matrix.length - 1;
	var borderLeft = 0;
	var spinalOrder = [];

	while(true) {
		for (var i = borderLeft; i <= borderRight; i++) {
			spinalOrder.push(matrix[borderTop][i]);
		}

		borderTop += 1;

		if (checkBorders(borderTop, borderRight, borderBottom, borderLeft)) {
			break;
		}

		for (var j = borderTop; j <= borderBottom; j++) {
			spinalOrder.push(matrix[j][borderRight]);
		}

		borderRight -= 1;

		if (checkBorders(borderTop, borderRight, borderBottom, borderLeft)) {
			break;
		}

		for (var k = borderRight; k >= borderLeft; k--) {
			spinalOrder.push(matrix[borderBottom][k]);	
		}

		borderBottom -= 1;

		if (checkBorders(borderTop, borderRight, borderBottom, borderLeft)) {
			break;
		}

		for (var l = borderBottom; l >= borderTop; l--) {
			spinalOrder.push(matrix[l][borderLeft]);	
		}

		borderLeft += 1;

		if (checkBorders(borderTop, borderRight, borderBottom, borderLeft)) {
			break;
		}

	}

	var res = "";

	for (var i = 0; i < spinalOrder.length; i++) {
		res += spinalOrder[i];
		if (i !== spinalOrder.length - 1) {
			res += ', ';
		}
	}

	console.log(res);
};

function checkBorders(top, right, bottom, left){
	return top > bottom || left > right;
};