// const sing = async function(){
//     return 'oh hoooo';
// }

// sing().then((data)=>{
//     console.log('showkali');
//     console.log(data);
// })

// const sing = async()=>{
//     // throw new Error('oh hohh')
//     return 'ah'
// }

// sing().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//  console.log('oh');
//  console.log(err)
// })

// const login = async (username,password)=>{
//     if(!username || !password ) throw 'missing credientials'
//     if(password==='hello') return 'welcome'
//     throw 'invalid pass'
// }

// login('dharan','hello').then((msg)=>{
//     console.log(msg);
//     console.log('logged in');
// }).catch((e)=>{
//     console.log('errrorrr')
//     console.log(e);
// })

//Await keyword


const delayedColorChange = (color,delay)=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            reslove();
        },delay)
    })
}

// delayedColorChange('red',1000)
//     .then(()=> delayedColorChange('blue',1000))
//     .then(()=> delayedColorChange('green',1000))
//     .then(()=> delayedColorChange('pink',1000))
//     .then(()=> delayedColorChange('yellow',1000))
//     .then(()=> delayedColorChange('indigo',1000))

async function rainbow(){
    await delayedColorChange('blue',1000)
    await delayedColorChange('green',1000)
    await delayedColorChange('pink',1000)
    await delayedColorChange('yellow',1000)
    await delayedColorChange('indigo',1000)
    return 'all done'
}

// rainbow().then(() => console.log('overeeee'))

async function setRainbow(){
    await rainbow();
    console.log('done');

}

// setRainbow();


//Handling with errors

const fakepromises = (url)=>{
    return new Promise((resolve,reject)=>{
        const delay =Math.floor(Math.random() * 4500) +500;
        setTimeout(()=>{
            if(delay>4000){
                reject('Connection Timed out');
            }else{
                resolve(`Here is your fake data from ${url}`);
            }
        },delay)
    })
}

async function maketwo(){
    try{
        let data1= await fakepromises('/page1');
        console.log(data1);
        let data2= await fakepromises('/page2');
        console.log(data2);
    }catch(e){
        console.log('error');
        console.log(e);
    }
}

maketwo()