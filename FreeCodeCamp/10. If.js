function test(val)
{
    if(val == 12)
    {
        return "Equal";
    }
    else if(val > 12)
    {
        return "greater"
    }
    else
    {
        return "lesser";
    }
}
console.log(test(10));

/*
equality    ==
strictly equal  === 
not equal   !=
strictly not equal  !==
------------------------------
comparison 

>   greater than
>=    greater than or equal to
<       less than
<=      less than or  equal to
-------------------------------
logical

&&      And
||      Or
-------------------------------
switch

switch(var)
{
    case val: stmt;
        break;
    case val: stmt;
        break;
    default: stmt;
}


*/