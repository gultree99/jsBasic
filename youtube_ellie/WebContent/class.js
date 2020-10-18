'use strict'

class person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	
	speak(){
		console.log(`${this.name} :hello~!`);
	}
}

const ellie=new person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//---------------
class Shape{
	constructor(width,height,color){
		this.width=width;
		this.height=height;
		this.color=color;
	}
draw(){
	console.log(`drawing ${this.color}`);
}	

getArea(){
	return this.width * this.height;
}
}

class Rectagle extends Shape{}
class Triangle extends Shape{
	getArea(){
		
		return this.width * this.height /2;
	}
}

const rectagle=new Rectagle(20,20,'blue');
rectagle.draw();
console.log(rectagle.getArea());
const triangle=new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());