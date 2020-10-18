'use strict'

class UserStorage{
	loginUser(id,passwd){
		return new Promise((resolve,reject)=>{
				setTimeout(()=>{
			if(
			(id==='ellie'&&passwd==='dream')||
			(id=='coder'&& passwd==='academy')
			){
				resolve(id);
			}else{
				reject(new Error('not found'));
			}
		},2000);
		})
	
	}
	getRoles(user){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
			if(user==='ellie'){
				resolve({name:'ellie',role:'admin'});
			}else{
				reject(new Error('no access'));
			}
		},1000);
		})

	}
}

const userStorage=new UserStorage();
const id=prompt('enter your id');
const passwd =prompt('enter your password');
userStorage.loginUser(id,passwd)
.then(user=>userStorage.getRoles(user))
.then(user=>alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);

