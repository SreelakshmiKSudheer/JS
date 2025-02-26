
// element by id
// let element = document.getElementById('heading');
// console.log(element);

// // element by class
// element = document.getElementsByClassName('list-item');
// console.log(element);

// // element by tag name
// element = document.getElementsByTagName('li');
// console.log(element);

// // element by CSS selectors
// element = document.querySelector('.container');
// console.log(element);

// // elements select all
// element = document.querySelectorAll("div"); // all amatches 
// console.log(element);

let element = document.getElementById("main-heading");

// changing content
// function innerhtml(){
function textcontent(){
    //document.getElementById("main-heading").innerHTML = "Hi welcome again";
    element.textContent = "Hi there";
}

