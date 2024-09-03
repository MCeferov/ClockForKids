//! Boolean
// var trueValue = true //? 1
// var falseValue = false //? 0

// console.log(trueValue + " it returns for number 1 ");
// console.log(falseValue + " it returns for number 0 ");

//? var example = "for example"
//? var test = ""

// console.log(example);
//! !  qoyaraq dəyişənin boolean dəyərini dəyişirik (true-dirsə false olacaq, false-dirsə true olacaq)
// console.log(!example);
//! !! qoyaraq dəyişənin boolean dəyərini görürük
// console.log(!!test);

//! Undefined

// var example
// console.log(example);

//! Null

// var test = null;
// console.log(test);

//! False values
// ""
// 0
// false
// null
// undefined

//! Condinional statements
//Todo First Task
//? var name = prompt("Yusif")

//? if(name=="Yusif"){
//?     console.log(name);
//? }else{console.log(!!"");
//? }


//Todo Second Task
//* var name = prompt("Please enter your name :");

//* var age = prompt("Please enter your age :");

//*if (age >= 18) {
//*   alert(name + " Logged in successfully");
//* } else {
//*   alert(name + " Please wait for your 18 age");
//* }

//Todo Third Task

// var name = prompt("Please enter your name")
// var age = prompt("Please enter your age")

// if (age < 18){
//     alert(name + " Please wait for your 18 age");
// } else if (age >= 18 && age <61 ){
//         alert(name + " You are eligible for job");
// }else{
//     alert(name + " Your are older for job");
// }




































// var name = prompt("Please enter your name")
// var age = prompt("please enter your age")
// if (age<=18){
//     alert(name + " Please wait for your 18 age");
// }else{
//     alert(name + " Please wait for your 18 age");
// }

var YourName = prompt("Please enter your name")
var age = prompt("Please enter your age")
if (age <18){
    alert(YourName + "Please wait for your age");
    
}else if (age>=18 && age <61)
    {alert(YourName + "Your eligible for job")}

else {
    alert(YourName + "Your are older for job");
}