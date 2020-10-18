'use strict'

const fruit=['apple','banana'];

for(let f of fruit){
	console.log(f);
}

fruit.forEach(function(fruit){
	console.log(fruit);
});

fruit.forEach((fruit)=>console.log(fruit));

//----------------
//뒤에 push로 추가 pop으로 삭제
fruit.push('berry','pitch');
console.log(fruit);
fruit.pop();
fruit.pop();
console.log(fruit);

//앞에서 unshift추가 shift삭제
fruit.unshift('lemon');
console.log(fruit);
fruit.shift();
console.log(fruit);
//가운데
fruit.push('banana','berry','pitch','lemon');
//fruit.splice(1);//뒤에 다 지움
fruit.splice(1,1);
console.log(fruit);
fruit.splice(1,1,'watermelon');
console.log(fruit);

const fruit2=['pear','coconut'];
const newFruit=fruit.concat(fruit2);
console.log(newFruit);

console.clear();
console.log(fruit);
console.log(fruit.indexOf('lemon'));
console.log(fruit.includes('apple'));

fruit.push('apple');
console.log(fruit);
console.log(fruit.indexOf('apple'));
console.log(fruit.lastIndexOf('apple'));

