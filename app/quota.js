
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


       // pop up massage here.
       document.getElementById("my_modal_1").showModal();

} else{
   alert('put valid info');
};
      // donation history here:
      const historyItem = document.createElement('div')
      historyItem.className = 
      "bg-white rounded-md shadow-lg p-5 mt-2";
      
      historyItem.innerHTML = `

      <p>${quotaInput} taka is donate for flood Quota Movement</p>
      <p class="text-gray-500">${new Date()}</p>
      `;
      
      const historyContainer = document.getElementById('Quota-history-container');
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});

