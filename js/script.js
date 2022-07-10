window.alert('Precione "T" para iniciar o jogo...\n E boa sorte.')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.gameOver');
const musica = document.getElementById('musica');
const morte = document.getElementById('morte');
const reloads = document.querySelector('.reload');
const superMario = document.querySelector('.superMario');
const score = document.querySelector('.pontuacao');
// Sons
function disableAutoplay() { 
    musica.pause();
}
function enableAutoplay() { 
    musica.play();
  }
function enableMorte(){
    morte.play();
}
//Jump do personagem
const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}
//Verifica se morreu
const iniciar = () => {
    enableAutoplay()
    let pontuacao = 0;
    const scores = setInterval(()=>{
        pontuacao = pontuacao + 1;
        score.innerText = `SCORE: ${pontuacao}`;  
    },100)
    const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
            disableAutoplay();
            enableMorte();
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = './img/game-over.png';
            mario.style.width = '75px';
            mario.style.left = '50px';
            gameOver.classList.add('gameOverAnimation');
            gameOver.style.opacity = '1';
            reloads.classList.add('reloadPos');
            reloads.style.opacity = '1';
            clearInterval(scores)
            clearInterval(loop);
        }
    }, 1);
}
const teclado = document.addEventListener('keydown', (r) => {
    if (r.key == 'r'){
        location.reload();
    }else if(r.key == 't'){
        iniciar()
        superMario.classList.add('superMario1')
        superMario.style.opacity = '0';
    }else{
        jump()
    }
});


    
