//Normal nesting callbacks

// setTimeout(()=>{
//     document.body.style.backgroundColor='orange';
//     setTimeout(()=>{
//         document.body.style.backgroundColor ='red';
//         setTimeout(()=>{
//             document.body.style.backgroundColor='yellow';
//         },1000)
//     },1000)
// },1000)

//Another type of callback

const delayedColorChange = (newcolor,delay,doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor =newcolor;
        doNext && doNext();
    },delay)
}

delayedColorChange('red',1000,()=>{
    delayedColorChange('blue',1000,()=>{
        delayedColorChange('green',1000,()=>{
            delayedColorChange('yellow',1000,()=>{
                delayedColorChange('violet',1000,()=>{
                    delayedColorChange('indigo',1000,()=>{
                    })
                })
            })
        })
    })
});