// Q1 solution
// let popup = open('https://www.google.com', 'popup', 'width=300,height=200').document.write('Abdelrahman Elkhouly');
// console.log(popup);

// if (!popup.closed) {
//     popup.close();
// }

// write method overrides the entire content


// Q2 solution

let docImages = document.images;
let images = document.querySelectorAll('img');

let options = document.querySelectorAll('#city option');

let secondTable = document.querySelectorAll("table:nth-of-type(2) td");
console.log(secondTable);

let fontBlue = document.querySelectorAll(".fontBlue");
let BGrey = document.querySelectorAll(".BGrey");
console.log(BGrey, fontBlue);

const date = new Date();
document.title = date.toLocaleString();
console.log(document.title);


let url = location.search;
let search = url.substring(1);

let arr = search.split("&");
let obj = {};
arr.forEach((elem) => {
    let keyValue = elem.split("=");
    obj[keyValue[0]] = keyValue[1];
});
console.log(obj);