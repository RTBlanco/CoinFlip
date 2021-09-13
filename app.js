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
  
  // TODO: adde event to that grabs the coin sides and chooses it randomly
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
