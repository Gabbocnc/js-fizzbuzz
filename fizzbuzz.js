console.log("test");

//Imposto il loop 
for (let i = 1; i < 101; i++){
    console.log(i);
    //Applico la variabile di un numero divisibile per 3 utilizzando il remainder = %
    if (i % 3 == 0 ){
        console.log( "Fizz");
    }
    //Applico la variabile di un numero divisibile per 5 utilizzando il remainder = %
    if (i % 5 == 0 ){
        console.log("Buzz");
    }
    //Applico la variabile di un numero divisibile sia per 3 che per 5 utilizzando il remainder = %
    if (i % 3 == 0 && i % 5 == 0 ){
        console.log("FizzBuzz");
    }
}