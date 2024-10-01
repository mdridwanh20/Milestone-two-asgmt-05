
// header scroll: 
const headerSection = document.getElementById('header-section');
console.log(headerSection);

      window.addEventListener('scroll', function(){
         if (this.scrollY >= 100){
            headerSection.classList.add('scrolled')
         } else{
            headerSection.classList.remove('scrolled')
         }
         
      });


// history button 
const historyBtn  = document.getElementById('history-button')
historyBtn.addEventListener('click', function(){
      historyBtn.classList.add(
         "btn-primary"
      );
      
      document.getElementById('donation-section').classList.add('hidden');
      document.getElementById('history-section').classList.remove('hidden')

      donationBtn.classList.remove(
          "btn-primary"
      );
});


// donation button
const donationBtn = document.getElementById('donation-button');
donationBtn.addEventListener('click', function(){
      donationBtn.classList.add(
         "btn-primary"
      );

      document.getElementById('donation-section').classList.remove('hidden');
      document.getElementById('history-section').classList.add('hidden')

      historyBtn.classList.remove(
         "btn-primary"
      )
});




// // live validation check noakahali:
   document.getElementById('noakhali-input').addEventListener('input', function(){
   const inputValue = document.getElementById("noakhali-input").value;


      console.log(inputValue);
      
      if(inputValue == ""){
         document.getElementById('noakhali-input-error').classList.add('hidden');
         return;
      }

      const inputValueNumber = parseFloat(inputValue);

      if(isNaN(inputValueNumber) || inputValueNumber < 0){
         document.getElementById('noakhali-input-error').classList.remove('hidden');
         return;
      } else{
         document.getElementById('noakhali-input-error').classList.add('hidden');
         return ;
      }
      
   })




// live validation check feni:
   document.getElementById('feni-input').addEventListener('input', function(){
   const inputValue = document.getElementById("feni-input").value;

   
      if(isNaN(inputValue) || inputValue < 0){
         document.getElementById('feni-input-error').classList.remove('hidden');
         return;


      }else{
         document.getElementById('feni-input-error').classList.add('hidden');
         return;
      }
      
   })

   
// // live validation check qouta:
   document.getElementById('quota-input').addEventListener('input', function(){
   const inputValue = parseFloat(document.getElementById("quota-input").value);
      
      if(isNaN(inputValue) || inputValue < 0){
         document.getElementById('quota-input-error').classList.remove('hidden');
         return;

      }else{
         document.getElementById('quota-input-error').classList.add('hidden');
         return;
      }
      
   })










   