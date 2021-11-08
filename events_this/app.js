const buttons= document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

const randcol = ()=>{
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})` ;
}

for(let button of buttons){
    button.addEventListener('click',colorize)
}
for(let h1 of h1s){
    h1.addEventListener('click',colorize)
}


function colorize(){
    //document.body.style.backgroundColor=randcol();
    this.style.backgroundColor=randcol();
    this.style.color = randcol();
}