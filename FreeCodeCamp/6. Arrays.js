var array = ["John", 23];
var nestedArray = [["Akhil",20],["Alwin",21],["Edwin",19],["Jessin",20]];

array[0] = "Akhil";
console.log(array[0]);
console.log(nestedArray[0]);
console.log(nestedArray[0][0]); 

array.push(["happy","joy"]);
console.log(array);

nestedArray.push(["Arjun",20],["Alan",21]);
console.log(nestedArray);

array.pop();
console.log(array);

nestedArray.pop();
console.log(nestedArray);

// shift
var removeArray = array.shift();
console.log(removeArray);

// unshift
array.unshift(removeArray);
console.log(array);


