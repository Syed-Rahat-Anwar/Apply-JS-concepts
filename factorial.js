//factorial of a number
// var factorial = 1;

// for(var i=1; i<= 50; i++){

//     factorial = factorial * i;
    
//     console.log(i, factorial);
     
// }


//factorial with function


function factorial(num){

    var factorial = 1;
    for(var i =1; i<=num ; i++){

        factorial = factorial * i;
        
    }

    return factorial;

}
var result = factorial(15);
console.log(result);