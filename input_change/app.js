// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');


// input.addEventListener('input',function(e){
//     h1.innerText = input.value 
// })

const button = document.querySelector('#changecolor');
const container = document.querySelector('#container');

button.addEventListener('click',function(e){

    container.style.backgroundColor=randcol();
    e.stopPropagation();
})


container.addEventListener('click',function(){
    container.classList.toggle('hide');
})
const randcol = ()=>{
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})` ;
}