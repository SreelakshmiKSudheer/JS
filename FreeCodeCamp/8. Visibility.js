var myGlobal = 10;      // global

function fun()
{
    var myLocal = 5;
    var myGlobal = 15;

    return myGlobal;
}

console.log(myGlobal);
//console.log(myLocal);

console.log(fun());
console.log(myLocal);

