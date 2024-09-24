
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





   