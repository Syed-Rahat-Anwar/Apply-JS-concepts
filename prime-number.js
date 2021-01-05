//check a number is prime number or not using javascript


        function isPrime(n){

        for(var i =2; i < n; i++){
            // console.log(i, n % i);
         
         
             if(n % i == 0){
         
                 return 'Not a prime number';
                 
             }
         
             }
         
                return  'Your number is a prime number';
             }


var result = isPrime(120);
console.log(result);