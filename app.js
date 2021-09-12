document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const button = document.getElementById('flip-btn');
  const coin = document.getElementById('inner-coin');
  const flipAnimation = document.querySelector('.flip');
  
  flipAnimation.addEventListener('animationend', () => {
    console.log('animation ended')
  });
  
  button.addEventListener('click', (e) => {
    console.log('fliped');
    // if (coin.classList.contains('flip')) {
      //   coin.classList.
      // }
    // coin.className = 'flip';
      
    flipAnimation.classList.toggle('active');



  })
})