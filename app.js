document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const button = document.getElementById('flip-btn');
  const coin = document.getElementById('inner-coin');
  const flipAnimation = document.querySelector('.flip');
  
  // flipAnimation.addEventListener('animationstart', () => {
  //   console.log('animation ended')
  // });

  // flipAnimation.addEventListener('animationend', () => {
  //   flipAnimation.classList.remove('active')
  // })
  
  button.addEventListener('click', (e) => {
    console.log('fliped');
      
    flipAnimation.classList.toggle('active');



  })
})