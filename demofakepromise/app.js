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
//const request = fakepromise('yelp.com');

//sample example for the fakepromise

// fakepromises('yelp.com/api/coffee').then(()=>{
//     console.log('it worked')
// }).catch(()=>{
//     console.log('oh error')
// })

//here comes the another sample

// fakepromises('yelp.com/page1')
// .then(()=>{
//     console.log('hello yoo');
//     console.log('yup mee again');
//     fakepromises('yelp.com/page2')
//     .then(()=>{
//         console.log('hello yoo 2');
//         console.log('yup mee again 2');
//         fakepromises('yelp.com/page3')
//         .then(()=>{
//             console.log('hello yoo3');
//             console.log('yup mee again3');
//         })
//         .catch(()=>{
//             console.log('oh noooo its is a error3');
//         })
//     })
//     .catch(()=>{
//         console.log('oh noooo its is a error 2');
//     })
// })
// .catch(()=>{
//     console.log('oh noooo its is a error');
// })

//Here comes promises

fakepromises('yelp.com/page1')
.then((data)=>{
    console.log('its worked');
    console.log(data)
    return fakepromises('yelp.com/page2')
})
.then((data)=>{
    console.log('it worked again ');
    console.log(data)
    return fakepromises('yerlp.com/page3')
})
.then((data)=>{
    console.log('It is working');
    console.log(data);
})
.catch((err)=>{
    console.log('oh its a error');
    console.log(err)
})