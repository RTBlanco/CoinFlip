document.addEventListener('DOMContentLoaded', () => {
  const statusArea = document.getElementById('status');
  const button = document.getElementById('flip-btn');
  const coin = document.getElementById('inner-coin');
  const flipAnimation = document.querySelector('.flip');

  const status = {
    sides: {
      tails: 0,
      heads: 0,
    },
    flips: 0
  }

  button.addEventListener('click', (e) => {
    randomize(coin, status)
    flipAnimation.classList.toggle('active');
    status.flips += 1

    statusArea.innerHTML = `
      <p>Flips: ${status.flips}</p>
      <p>Heads: ${status.sides.heads}</p>
      <p>Tails: ${status.sides.tails}</p>
    `
  })
})

function randomize(div, status) {
  const sides = div.children
  let index = Math.floor(Math.random() * sides.length)
  let side = sides[index]
  console.log(side.innerText)

  switch(side.id) {
    case 'heads':
      status.sides.heads += 1;
      break; 
    case 'tails':
      status.sides.tails += 1;
      break;
  }

  if (side !== div.firstElementChild) {
    div.firstElementChild.className = 'last'
    side.className = 'first'
    div.insertBefore(side, div.firstElementChild)
  }
}
