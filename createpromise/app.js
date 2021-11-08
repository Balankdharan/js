const delayedColorChange = (color,delay)=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            reslove();
        },delay)
    })
}

delayedColorChange('red',1000)
    .then(()=> delayedColorChange('blue',1000))
    .then(()=> delayedColorChange('green',1000))
    .then(()=> delayedColorChange('pink',1000))
    .then(()=> delayedColorChange('yellow',1000))
    .then(()=> delayedColorChange('indigo',1000))