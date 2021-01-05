

var factorial =1;
var i=1;
while(i< 10){

factorial = factorial * i;
console.log(i, factorial);

i++;

}


function factorial(num){

    var fact =1;
    var i=1;
    while(i<= num){
    
    fact = fact * i;
    i++;
    
    }
    return fact;

}
 var result = factorial(6);
 console.log(result);