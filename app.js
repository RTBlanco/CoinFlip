document.addEventListener('DOMContentLoaded', () => {
  const statusArea = document.getElementById('status');
  const button = document.getElementById('flip-btn');
  const coin = document.getElementById('inner-coin');
  const flipAnimation = document.querySelector('.flip');

  const status = {
    sides: {
      flips: 0,
      heads: 0,
    },
    tails: 0
  }

  button.addEventListener('click', (e) => {
    randomizeChildren(coin)
    flipAnimation.classList.toggle('active');
  })
})

function randomizeChildren(div, status) {
  // debugger
  const sides = div.children
  let index = Math.floor(Math.random() * sides.length)
  let side = sides[index]
  console.log(side.innerText)

  switch(side.innerText) {

  }

  if (side !== div.firstElementChild) {
    div.firstElementChild.className = 'last'
    side.className = 'first'
    div.insertBefore(side, div.firstElementChild)
  }
}
