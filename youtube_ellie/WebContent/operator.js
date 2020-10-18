'use strict'

for(let i=0; i<=10; i++){
	if(i%2!==0){
		continue;
	}
	console.log(`1번문제 i:${i}`);
}

for(let i=0; i<=10; i++){
	if(i>8){
		break;
	}
	console.log(`2번문제 i:${i}`);
}