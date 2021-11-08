// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');

const p1={
    score :0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display')
}

const p2={
    score:0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display')
}

const resetButton= document.querySelector('#reset');
const winingScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
let winingScore =3;
let isGameOver = false;

function updateScores(player,opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score === winingScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent=player.score;
    }
}

p1.button.addEventListener('click',function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click',function(){
    updateScores(p2,p1)
})


winingScoreSelect.addEventListener('change',function(){
    winingScore =parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset)


function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0; 
        p.display.textContent=0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false; 
    }
    // p1Score = 0;
    // p2Score = 0;
    // p1Display.textContent =0;
    // p2Display.textContent=0;
    // p1Display.classList.remove('has-text-success','has-text-danger');
    // p2Display.classList.remove('has-text-success','has-text-danger');
    // p1Button.disabled = false;
    // p2Button.disabled = false; 
}