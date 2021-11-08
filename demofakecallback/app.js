const fakerequest = (url,sucess,failure)=>{
    const delay = Math.floor(Math.random()*4500) +500;
    setTimeout(()=>{
        if(delay>4000){
            failure('connnection timed out')
        }else{
            sucess(`Here is the fake data from ${url}`)
        }
    },delay)
}

// fakerequest('books.com',function(response){
//     console.log('it worked');
//     console.log(response);
// },function(err){
//     console.log('error');
//     console.log('error', err);
// })

fakerequest('books.com/page1',function(response){
    console.log('it worked');
    console.log(response);
    fakerequest('books.com/page2',function(response){
        console.log('It worked again');
        console.log(response)
        fakerequest('books.com/page3',function(response){
            console.log('It worked ra again');
            console.log(response)
        },function(err){
            console.log('error');
            console.log('error', err);
        })
    },function(err){
        console.log('error');
        console.log('error', err);
    })
},function(err){
    console.log('error');
    console.log('error', err);
})