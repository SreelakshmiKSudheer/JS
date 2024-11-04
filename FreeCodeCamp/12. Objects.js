// defien an object
var dog = {
    "name" : "sparky",
    "legs are": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// property accessing
var name = dog.name;
var legs = dog["legs are"];
var variable = "tails";
var tails = dog[variable];

// replacing property values
dog.name = "spooky sparky";
var name = dog.name;


console.log(name);
console.log(legs);
console.log(tails);

// inserting a new property
dog["bark"] = "woof";
console.log(JSON.stringify(dog));

// deleting a property
delete dog.bark;
console.log(JSON.stringify(dog));
