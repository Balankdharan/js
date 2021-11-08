const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click',()=>{
    newColor=randcol();
    document.body.style.backgroundColor=newColor;
    h1.innerText=newColor;
});
const randcol = ()=>{
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})` ;
}