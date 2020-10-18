/*
'use strict'

async function fetchUser(){
	return 'ellie';
}

const user=fetchUser();
user.then(console.log);
console.log(user);

//--------------
function delay(ms){
	return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
	await delay(2000); //1초 기다렸다가 apple 리턴
	return('apple');
}

async function getBanana(){
	await delay(1000);
	return 'banana';
}

async function pickFruit(){
	const applePromise=getApple();
	const bananaPromise=getBanana();
	const apple=await applePromise;
	const banana=await bananaPromise;
	return `${apple}+${banana}`;
}

pickFruit().then(console.log);

//-------------
function pickAllFruit(){
	return Promise.all([getApple(),getBanana()])
	.then(fruit=>fruit.join('+'));
}
pickAllFruit().then(console.log);

function pickOnlyOne(){
	return Promise.race([getApple(),getBanana()]);
}
pickOnlyOne().then(console.log);
*/