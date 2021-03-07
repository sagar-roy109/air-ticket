/**
 *  Increaes number function
 */

function increase(flightClass){
   const passengerClass =  document.getElementById(flightClass);
   let passengerInt = parseInt(passengerClass.value);
        passengerInt++ 
    passengerClass.value = passengerInt;

    total();
    

 }

 






/**
 * Decrease number
 */

function decrease(flightClass){
    const passengerClass =  document.getElementById(flightClass);
   let passengerInt = parseInt(passengerClass.value);
       

    if(passengerInt > 0){
        passengerInt-- ;
        passengerClass.value = passengerInt;
    }

    total();
    
}


function total(){
    /**
     *  Calculate subtotal
     */

    
     let firstClass = document.getElementById('firstClass');
     let firstClassPrice = parseInt(firstClass.value) * 150;
     let economy = document.getElementById('economy');
     let economyPrice = parseInt(economy.value) * 100;
 
     let subTotalAmount = firstClassPrice + economyPrice;
 
     let subTotal = document.getElementById('subTotalAmount');
     subTotal.innerText = '$' + subTotalAmount;

    /**
     * Calculate vat
     */

     let vat = document.getElementById('vat'); 
     let vatPrice = (subTotalAmount * 10)/ 100;
     vat.innerText = '$' + vatPrice;


     /**
      * calculate total
      */

     
     let totalPrice = subTotalAmount + vatPrice;
     document.getElementById('total').innerText= '$' + totalPrice;
     
}


/**
 * Ticket confirmation
 */

function confirmTicket(){
    let totalPrice = document.getElementById('total').innerText;
    if(totalPrice == '$0'){
        alert('Please select flight ticket class');
    }else{
        alert('Your booking is successfull ! Happy Jounery ');
    };
}