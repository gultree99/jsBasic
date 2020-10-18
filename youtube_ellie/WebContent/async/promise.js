'use strict'

const promise=new Promise((resolve,reject)=>{
	console.log('doing something...');
	setTimeout(()=>{
		//resolve('ellie');
		reject(new Error('no network'));
	},2000);
});

promise.then((value)=>{
	console.log(value);
})
.catch(error=>{
	console.log(error);
})
.finally(()=>{
	console.log('finally');
});

//------------
const fetchNumber=new Promise((resolve,reject)=>{
	setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>resolve(num-1),1000);
	});
})
.then(num=>console.log(num));

//--------------
const getHen=()=>
	new Promise((resolve,reject)=>{
		setTimeout(()=>resolve('chicken'),1000);
	});
const getEgg=hen=>
	new Promise((resolve,reject)=>{
		setTimeout(()=>resolve(`${hen}=>'BigEgg'`),1000);
	});
const cook=egg=>
	new Promise((resolve,reject)=>{
		setTimeout(()=>resolve(`${egg}=>freid`),1000);
	});
	
getHen()
.then(hen=>getEgg(hen))
.then(egg=>cook(egg))
.then(meal=>console.log(meal));			