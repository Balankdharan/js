
//*** FETCH API  */


// fetch('https://api.cryptonator.com/api/full/btc-usd')
// .then(res=>{
//     console.log(res)
//     return res.json();
// })
// .then(data=>{
//     // console.log('data is',data)
//     console.log(data.ticker.price);
// })
// .catch(err=>{
//     console.log(err)
// })

// const fetchbitcoin=async()=>{
//     try{
//     const res =await fetch('https://api.cryptonator.com/api/full/btc-usd');
//     const data = await res.json()
//     console.log(data.ticker.price)
//     }catch(err){
//         console.log('error bro')
//     }
// }


//* AXIOS */


// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res=>{
//     console.log(res.data.ticker.price)
// })
// .catch(err=>{
//     console.log('oh errrooooorrrr',err);
// })


const fetchbitcoin=async()=>{
    try{
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log(res.data.ticker.price);
    }catch(err){
        console.log('error',err);
    }
}