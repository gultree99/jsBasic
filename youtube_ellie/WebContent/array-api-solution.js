'use strict'
// Q1. make a string out of an array \배열을 string으로
{
  const fruits = ['apple', 'banana', 'orange'];

	const result=fruits.join();
	console.log(result);
}

// Q2. make an array out of a string \string을 배열로
{
  const fruits = 'apple,kiwi,banana,cherry';
	
	const result=fruits.split(',');
	console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]\배열울 거꾸로 출력
{
  const array = [1, 2, 3, 4, 5];
	const result=array.reverse();
	console.log(result);
}

// Q4. make new array without the first two elements\앞에서 두개 제거하고 새로운 배열 만들기
{
  const array = [1, 2, 3, 4, 5];

	const result=array.slice(2,5);
	console.log(result);//새로운 배열(slice)
	console.log(array);//원래대로(split)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 \90점인 학생찾기
{
	const result=students.find((student)=>student.score===90);
	console.log(result);
}

// Q6. make an array of enrolled students\등록된 학생 찾기
{
	const result=students.filter((student)=>student.enrolled);
	console.log(result);
}
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88] \점수만 배열로
{
	const result=students.map((student)=>student.score);
	console.log(result);
}

// Q8. check if there is a student with the score lower than 50 /50점 이하가 있는지 확인
{
	const result=students.some((student)=>student.score<50);
	console.log(result);
}
console.clear();
// Q9. compute students' average score \평균 점수 구하기
{
	const result=students.reduce((prev,curr)=>prev+curr.score,0);
	console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88' \점수를 string으로 변환
{
	const result=students
	.map((student)=>student.score) //점수만 배열로
	.filter((score)=>score>50) //50점 이상인 학생만
	.join(); //string으로 변환
	console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90' \점수가 낮은 순으로 정렬
{
	const result=students.map((student)=>student.score)
	.sort((a,b)=>a-b) //높은 순은 b-a
	.join();
	console.log(result);
}
