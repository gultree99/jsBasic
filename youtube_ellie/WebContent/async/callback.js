'use strict'

console.log('1'); //동기
setTimeout(()=>console.log('2'),1000); //비동기
console.log('3'); //동기

function printImmediately(print){
	print(); 
}
printImmediately(()=>console.log('hello')); //동기

function printWithDelay(print,timeout){
	setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000); //비동기


//--------------
class UserStorage{
	loginUser(id,passwd,onSuccess,onError){
		setTimeout(()=>{
			if(
			(id==='ellie'&&passwd==='dream')||
			(id=='coder'&& passwd==='academy')
			){
				onSuccess(id);
			}else{
				onError(new Error('not found'));
			}
		},2000);
	}
	getRoles(user,onSuccess,onError){
		setTimeout(()=>{
			if(user==='ellie'){
				onSuccess({name:'ellie',role:'admin'});
			}else{
				onError(new Error('no access'));
			}
		},1000);
	}
}

const userStorage=new UserStorage();
const id=prompt('enter your id');
const passwd =prompt('enter your password');
userStorage.loginUser(
	id,
	passwd,
	user=>{
		userStorage.getRoles(
			user,
			(userWithRole)=>{
				alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
		},(error)=>{
			console.log(error);
		})
	},
	error=>{console.log(error)}
	)