//2)For each JavaScript Operator, write 2 examples.
//arithmetic operator example 1

 let c = 20;
 let d = 31;
 let result = c + d;
 console.log(result);
 //arithmetic operator example 2
 let a = 10;
 let b = 90;/ let outcome = a - b;
 console.log(outcome);
 //assignment operators example 1
 let x = 20;
x += 5;
 console.log(x)
 //assignment operators example 2
 let y = 30;
 y /= 20;
 console.log(y)
 //comparison operators example 1
 let ore = 10;
 let ayo =20;
 console.log(ore ==ayo);
 //comparison operators example 2
 const m = 30;
 const n = 50;
 console.log(n >= m );
 //Bitwise operators example 1
 console.log(10 & 28);
 //Bitwise operators example 2
console.log( 5 << 40);
 //No. 4 question 
 for (let i = 1; i < 20; i += 7) {
    console.log(i)
 }
// No. 3
const name = prompt("Welcome to a new session. What is your name? ").toUpperCase()
const classGroup = prompt("What is your class group [Science, Social, Art]? ");


const scienceSubjects  = ["Physics", "Chemistry", "Biology", "Technical Drawing"];
const socialScienceSubjects = [ "Accounting", "Commerce", "Marketing"," Geography"];
const artSubjects = ["Government"," Economics", "Literature", "History"];
const generalSubjects = ["English", "Mathematics"];


if (classGroup.toLowerCase() === "art"){
    console.log(`${name}, your subjects are ${artSubjects}`)
}else if (classGroup.toLowerCase() === "science"){
    console.log(` ${name},your subjects are ${scienceSubjects}`)
}else if (classGroup.toLowerCase() === "socialScienceSubjects"){
    console.log(` ${name},your subjects are ${socialScienceSubjects}`)
}else {
    console.log(` ${name},your subject are general subjects: ${generalSubjects}`)
}
//No. 5
x = pow(2, Math.ceil(Math.log(40)/Math.log(40)));
// console.log(x)









