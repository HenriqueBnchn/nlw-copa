function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="icone bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="icone bandeira da ${player2}">
    </li>
  `
}

let delay = -0.3;

function createCard(date, day, games) {
  delay += 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML = `
    ${createCard("20/11", "domingo", createGame('catar', '12:00', 'equador'))}
    ${createCard("24/11", "quinta", createGame('brazil', '16:00', 'serbia'))}
    ${createCard("28/11", "segunda", createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguai'))}
    ${createCard("02/12", "sexta", createGame('brazil', '16:00', 'cameroon'))}
`




let btn_green = document.querySelector('#btn-green')
let btn_blue = document.querySelector('#btn-blue')
let btn_yellow = document.querySelector('#btn-yellow')

let body = document.querySelector('body')


function changeColorYellow(){
  body.className = 'yellow'
  checkColor()
} 
function changeColorBlue(){
  body.className = 'blue'
  checkColor()
} 
function changeColorGreen(){
  body.className = 'green'
  checkColor()
} 

checkColor()


function checkColor(){

  if (body.classList.contains('blue')){

    btn_green.style.filter = "brightness(100%)"
    btn_yellow.style.filter = "brightness(100%)"
    btn_blue.style.filter = "brightness(20%)"
    
  }else if(body.classList.contains('green')){

    btn_blue.style.filter = "brightness(100%)"
    btn_yellow.style.filter = "brightness(100%)"
    btn_green.style.filter = "brightness(20%)"
    
  }else if(body.classList.contains('yellow')){
    
    btn_blue.style.filter = "brightness(100%)"
    btn_green.style.filter = "brightness(100%)"
    btn_yellow.style.filter = "brightness(20%)"
    
  }
  
}
