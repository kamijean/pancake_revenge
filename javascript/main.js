//node main.js file.in > file.out
'use strict';

var fs = require('fs');
var data = {};
if (typeof process.argv[2] !== 'undefined') {
  data = fs.readFileSync(process.argv[2], 'utf-8').replace(/\r/g, '').split('\n').filter(String);
}
var minAmount = 1;
var maxAmount = 100;

function validCharacter(character) {
	var letters = /^[+-]$/;
	return letters.test(character);
}

function flipCount(row) {
	var count = 0;
	for (var i = 1; i < row.length; i++) {
		if(!validCharacter(row[i])) {
			return `Bad input: "${row[i]}" is not a valid character. Must be either - or +.`
		}
	  if(row[i] !== row[i -1]) count++;
	}
	if (row[row.length-1] === '-') count++;
	return count;
}

function validLength(length, low, high) {
	if(length < low || length > high) {
		console.log(`Bad input: ${Math.max(length, 0)} not in range (${low}-${high})`);
		return false;
	}
	return true;
}

function main(data, minAmount, maxAmount) {
	if(!validLength((data[0]), minAmount, maxAmount)) { return; }
	if(!validLength((data.length - 1), minAmount, maxAmount)) { return; }
	for (var i = 1; i < data.length; i++) {
		console.log(`Case #${i}: ${flipCount(data[i])}`);
	}
}

main(data, minAmount, maxAmount);

module.exports = {
	validLength,
	validCharacter,
	flipCount
}
