
const jokes =document.querySelector('#jokes')
const button =document.querySelector('button');
const addNewJoke =async()=>{
    const jokeText =await getJoke();
    // console.log(jokeText);
    const newLi =document.createElement('LI')
    newLi.append(jokeText);
    jokes.append(newLi)
}

const getJoke = async()=>{
    try{
        const config = {headers:{Accept: 'application/json'}}
        const res =await axios.get('https://icanhazdadjoke.com/',config);
        // console.log(res.data.joke)
        return res.data.joke;
    }catch(err){
        return 'NO jokes bro......'
    }
   
 
} 
button.addEventListener('click',addNewJoke)