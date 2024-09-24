
// / Flood Relief in Feni donate button:

document.getElementById('feni-donate-button')
    .addEventListener('click', function(){
        
        const feniInput = parseFloat(document.getElementById('feni-input').value);
        const feniAddedButton = parseFloat(document.getElementById('feni-added-button').innerText);
        //  main balance id value
        const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
        

        // logic-error
        if (feniInput > mainBalance){
         document.getElementById('feni-logic-error').classList.remove('hidden');
         return;
      }


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

          // pop up massage here.
          document.getElementById("my_modal_1").showModal();

   } else{
      // alert('put valid info');
      document.getElementById("my_modal_2").showModal();
   };
   
      // donation history here:
            const historyItem = document.createElement('div')
            historyItem.className = 
            "bg-white rounded-md shadow-lg p-5 mt-2";
            
            historyItem.innerHTML = `

            <p>${feniInput} taka is donate for flood at feni, bangladesh</p>
            <p class="text-gray-500">${new Date()}</p>
            `;
            const historyContainer = document.getElementById('feni-history-container');
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});

