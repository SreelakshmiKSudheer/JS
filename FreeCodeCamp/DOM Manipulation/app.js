
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
function innerhtml(){
    document.getElementById("main-heading").innerHTML = "Hi welcome again";
}
function textcontent(){
    element.textContent = "Hi there";
}

// changing attribute
function changeattribute(){
    image = document.getElementById("image");
    image.setAttribute("src", ".img/DKDM.jpeg");
    image.setAttribute("alt","DKDM");
}
// changing style
function