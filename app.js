document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const button = document.getElementById('flip-btn');
  const coin = document.getElementById('inner-coin');

  button.addEventListener('click', (e) => {
    console.log('fliped')
    coin.className = 'flip'
  })
})