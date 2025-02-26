
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
function changeStyle(){
    element.style.color = "cyan";
    element.style.fontFamily = "poppins";
    element.style.fontStyle = "italic";
    document.getElementsByClassName(".container").classList.add("newContainer");
}

function create(){
    let newItem = document.createElement("p");
    newItem.textContent = "Naruto";
    document.body.appendChild(newItem);     // add at the end
    
    
    let newli = document.createElement("li");
    newli.textContent = "Naruto";
    let refele = document.getElementById("marvel");
    refele.after(newli);
    
    newli = document.createElement("li");
    newli.textContent = "Naruto shippuden";
    refele = document.getElementById("matrix");
    refele.before(newli);

    document.getElementById("starwars").remove();       // remove an element
    /*
    ****** NOTE *******
    while testing these remember to comment all those above
    */

}

function eventer(){
    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", alert("Clicked"));
}