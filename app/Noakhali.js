
// Flood at Noakhali
document.getElementById('noakhali-donate-button')

    .addEventListener('click', function(){
        // id input value
        const noakhaliInput = parseFloat(document.getElementById('noakhali-input').value);
        //  main balance id value
        const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

        // logic-error
        if (noakhaliInput > mainBalance){
            document.getElementById('noakhali-logic-error').classList.remove('hidden');
            return;
        }

        


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

            // pop up massage: function.
            document.getElementById("my_modal_1").showModal();


   } else{
    // pop up massage here: function
    document.getElementById("my_modal_2").showModal();
   };


// total donation history section:
    const historyItem = document.createElement("div")
    // class name added
        historyItem.className = 
        "bg-white p-5 shadow-xl rounded-md mt-2";

    // child content added
        historyItem.innerHTML = `
        <p>${noakhaliInput} taka is donate for flood at noakahli, bangladesh</p>
        <p class="text-gray-500">${new Date()}</p>
        `;

    // called main container
        const historyContainer = document.getElementById('noakahli-history-container');
    // including by insertBefor
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});
