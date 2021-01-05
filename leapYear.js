// const year = 3998;
// const remainder = year % 4;
 
// if(remainder == 0)
// {
//     console.log("your year is a leap year");

// }
// else{

//     console.log("your year is not a leap year");
// }


// with function


function isLeapyear(year){
   const remainder = year % 4;                                        
   if((remainder ==0) && (year % 100 != 0) || (0 == year % 400)){
  return true;

   }
   else {
    return false;
}

}


const leapYear = isLeapyear(2018);
console.log(leapYear);