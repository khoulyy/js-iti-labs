// console.log(number1);
// var number1 = 3;
// let number2 = 2.9;
// let number3 = 0xff;
// 
// var firstName = "Abdelrahman";
// var middleName = 'Abdelfattah';
// var lastName = `Elkhouly`;
// 
// let flag = true;
// 
// console.log("This is the external javascript file");

sum(1, 2);

function sum(n1 = 0, n2 = 0) {
    // If I inserted < 2 inputs, it will not work
    if (typeof n1 == "number" || typeof n2 == "number") console.log("your inputs are numbers");
    return n1 + n2;
}
