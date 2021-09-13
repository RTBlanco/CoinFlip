document.addEventListener('DOMContentLoaded', () => {
  const statusArea = document.getElementById('status');
  const button = document.getElementById('flip-btn');
  const coin = document.getElementById('inner-coin');
  const flipAnimation = document.querySelector('.flip');
  
  const status = {
    flips: 0,
    heads: 0,
    tails: 0
  }

  button.addEventListener('click', (e) => {
    console.log('fliped');
    randomizeChildren(coin)
    flipAnimation.classList.toggle('active');
  })
})

function randomizeChildren(div) {
  // debugger
  const sides = div.children
  console.log(sides)
  let index = Math.floor(Math.random() * sides.length)
  console.log(sides[index])
  let side = sides[index]

  if (side !== div.firstElementChild) {
    div.firstElementChild.className = 'last'
    side.className = 'first'
    div.insertBefore(side, div.firstElementChild)
  }
}
