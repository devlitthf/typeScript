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

// const user = {
//     firstName: "Devraj Raikwar",
//     lastName: "Raikwar",
//     Role: "Student"
// }

// console.log(user.firstName)

// In the java script quick tracking is not possible util we search of console that object but in typescript we can quickly track object keys and values details with the help of including dot with object name or hover the cursor on object name

// Type Alias/Custom Type - In this terminology we can create own data types with help of typescript's === type keyword and name of datatype let's understand it by further example

// type User = {
//     name: String;
//     age: Number;
//     address?: String;  // we can set key of object as optional with including "?" before the key colon
// }



// We can also include function return type as like datatype
// function userDetails(userDetails: User){
//     return userDetails;
// }

// const user = {
//     name: "Devraj",
//     age: 27,
// };

// 
// console.log(userDetails(user));
// 
// type ID = number | String // This pipe sign we call union to apply two types in one datatype
// 
// const userId: ID = 231


// Interface/Contract

interface Transaction{
    payerAccountNumber: number;
    payeAccountNumber: number;
};

const transaction1: Transaction = {
    payerAccountNumber: 23423423,
    payeAccountNumber: 54352342
};

const transaction2: Transaction = {
    payerAccountNumber: 858573453,
    payeAccountNumber: 999484898
};

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: string;
    transaction: Transaction[]
};

const bankAccount: BankAccount = {
    accountNumber: 34353253245,
    accountHolder: "Devraj",
    balance: 3424242,
    isActive: "Active",
    transaction:[transaction1, transaction2]
};

// Extend interfaces

interface Book{
    name: string;
    price: number;
}

interface EBook extends Book {
    fileSize: number;
    format: string;
}

interface AudioBook extends EBook {
    duration: number;
}

const book: AudioBook = {
    name: "Atomic habits",
    price: 1200,
    fileSize: 300,
    format: "audio",
    duration: 234
};

console.log(book)