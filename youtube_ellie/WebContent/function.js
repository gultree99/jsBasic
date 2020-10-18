'use strict';

function printAll(...args){
	/*for(let i=0; i<args.length; i++){
		console.log(args[i]);
	}*/
	for(const arg of args){
		console.log(arg);
	}
}

printAll('이것','배열을','출력');

//--------------

const add1 =(a,b)  =>a+b;
const add2=function (a,b){
	return a+b;
}

console.log(add1(1,2));
console.log(add2(1,2));

//--------------

function calc(command,a,b){
	let result=0;
	if(command=='+'){
		result= a+b;
	}if(command=='-'){
		result= a-b;
	}
	return result;
}

console.log(calc("-",1,2));