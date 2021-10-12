
function Suma(num1: number, num2: number): number{
    return num1 + num2
}


console.log(Suma(2,4))

///////////////////////////////////////

let Resta = function(num1: number| string, num2:number|string): number{
    if(typeof num1 === "string"){
        num1 = parseInt(num1);
    }
    if(typeof num2 === "string"){
        num2 = parseInt(num2);
    }
    return num1 - num2
}


console.log("la resta es", Resta(10,4));

///////////////////////////////////////

