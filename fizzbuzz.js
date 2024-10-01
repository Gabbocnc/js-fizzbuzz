//Consegna:

//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//loop
    //for (let i =; i=; i;{
        //code..
    //variabili...{
        //code..}
    //variabili...{
        //code..}
    //variabili...{
        //code...}
    //}

console.log("test");

//Imposto il loop 
for (let i = 1; i < 101; i++){
    console.log(i);
    //Applico la variabile di un numero divisibile per 3 utilizzando il remainder assignment  %=
    if (i % 3 == 0 ){
        console.log( "Fizz");
    }
    //Applico la variabile di un numero divisibile per 5 utilizzando il remainder assignment %=
    if (i % 5 == 0 ){
        console.log("Buzz");
    }
    //Applico la variabile di un numero divisibile sia per 3 che per 5 utilizzando il remainder assignment = %
    if (i % 3 == 0 && i % 5 == 0 ){
        console.log("FizzBuzz");
    }
}