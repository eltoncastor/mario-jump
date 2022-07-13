var jumpAudio = new Audio('audios/mario-jump.mp3')

const jump = () => {
    const mario = document.querySelector('.mario')
    mario.classList.add('jump')
    jumpAudio.play();
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 600)
    
    
}

let count = 0
const loopScore = setInterval(() =>{
    const score = document.querySelector('.score')
    count = count + 1
    score.innerHTML = `SCORE  ${count}`
    console.log(count)
},100)


const loop = setInterval(() => {

    const mario = document.querySelector('.mario')
    const pipe = document.querySelector('.pipe')
    const reload = document.querySelector('.reload')
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    var gameoverAudio = new Audio('audios/game-over-audio.mp3');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {
        gameoverAudio.play();
        jumpAudio = ''
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        reload.style.visibility = 'visible';
        reload.style.animation = 'reload-fade-in 2s linear'

        newPageTitle = 'GAME OVER!'
        document.title = newPageTitle
        
        
        clearInterval(loop)
        clearInterval(loopScore)
        
    }
}, 10)


document.addEventListener('keydown', jump)
