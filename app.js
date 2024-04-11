// Usally The JavaScript is not bug proof while we are writing the code in editor it will show the bug after terminating the programm
// let num1:number = '1'
// let num1 = 1
// function addNum(num1:number, num2:number){
//     return num1 + num2
// }
// console.log(addNum(num1,3))
// This function will return 13 because we are adding String + number in this function so because of different datatype the values are concatinating with each other that's why we will get 13 and it is a bug in java script that it never analys that we are taking number in num1 variable
// function gTotal(numbers:number[]){
//     return numbers.reduce((acc, item) => {
//         return acc + item
//     }, 0);
// }
// In the pralce of parameter we are using generics
// function gTotal(numbers:Array<number>){
//     return numbers.reduce((acc, item) => {
//         return acc + item
//     }, 0);
// }
// console.log(gTotal([3,2,4]));
// In this function parameter is numbers but in the return line there is numder which is a bug but js is not indicating that error until terminating the code
var user = {
    firstName: "Devraj Raikwar",
    lastName: "Raikwar",
    Role: "Student"
};
console.log(user.firstName);
// In the java script quick tracking is not possible util we search of console that object but in typescript we can quickly track object keys and values details with the help of including dot with object name or hover the cursor on object name
