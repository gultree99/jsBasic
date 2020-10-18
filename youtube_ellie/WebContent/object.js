'use strict'

const user={name:'ellie',age:20};
const user2= user;
console.log(user2);

const user3={};
for(let key in user){
	user3[key]=user[key];
}
console.log(user3);

const user4={};
Object.assign(user4,user);
console.log(user4);

//--------------
const fruit1={color:'red'};
const fruit2={color:'blue', size:'big'};
const mixed=Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);