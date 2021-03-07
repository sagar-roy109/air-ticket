/**
 *  Increaes number function
 */

function increase(flightClass){
   const firstClass =  document.getElementById(flightClass);
   let firstClassInt = parseInt(firstClass.value);
        firstClassInt++ 
    firstClass.value = firstClassInt;


   /**Test Log */
   console.log(firstClassInt);
}



/**
 * Decrease number
 */

function decrease(flightClass){
    const firstClass =  document.getElementById(flightClass);
   let firstClassInt = parseInt(firstClass.value);
       

    if(firstClass.value > 1){
        firstClassInt-- 
        firstClass.value = firstClassInt;
    }

   /**Test Log */
   console.log(firstClassInt);
}