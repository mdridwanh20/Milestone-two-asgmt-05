
// Flood at Noakhali
   document.getElementById('noakhali-donate-button')
   .addEventListener('click', function(){
         
      // id input value
      const noakhaliInput = parseFloat(document.getElementById('noakhali-input').value);
      //  main balance id value
      const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
   
      //  check the input valid
   if (!isNaN(noakhaliInput) && noakhaliInput > 0){
      const addedDonate = parseFloat(document.getElementById('noakhali-donate-added-btn')
      .innerText);

         // sum input
         const sumDonate = noakhaliInput + addedDonate;
         document.getElementById('noakhali-donate-added-btn').innerText = sumDonate;

         // clear input 
         document.getElementById('noakhali-input').value = '';

         // main balance subtract
         const updateBalance = mainBalance - noakhaliInput;
         document.getElementById('main-balance').innerText = updateBalance.toFixed(2);

      } else{
         alert('put valid info')
      }
});




// Flood Relief in Feni donate button:
document.getElementById('feni-donate-button')
.addEventListener('click', function(){
      
const feniInput = parseFloat(document.getElementById('feni-input').value);
const feniAddedButton = parseFloat(document.getElementById('feni-added-button').innerText);
//  main balance id value
const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
   

// input valid verification condition:
   if(!isNaN(feniInput) && feniInput > 0){
      
      // added donation from input 
      const addedDonate = feniInput + feniAddedButton;
      document.getElementById('feni-added-button').innerText = addedDonate;
      
      // clear input valid;
      document.getElementById('feni-input').value = '';

      // main balance update:
      const updateBalance =  mainBalance - feniInput;
      document.getElementById('main-balance').innerText = updateBalance;

   
   } else{
      alert('put valid info');
   }

});


// Injured in the Quota Movement
document.getElementById('quota-button')
.addEventListener('click', function(){

// input and money added button
const quotaInput = parseFloat(document.getElementById('quota-input').value);
const quotAddedButton = parseFloat(document.getElementById('quota-added-button')
.innerText);

//  main balance id value
const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
 

// verify valid by condition;
if (!isNaN(quotaInput) && quotaInput > 0){
   

   // input to donation added;
   const sumDonate = quotaInput + quotAddedButton;
   document.getElementById('quota-added-button').innerText = sumDonate;

   // input clear 
   document.getElementById('quota-input').value = '';

   // update balance;
   const updateBalance = mainBalance - quotaInput;
   document.getElementById('main-balance').innerText = updateBalance;

   
} else{
   alert('put valid info');
}


});



