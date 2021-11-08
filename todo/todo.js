let input =prompt("what could you like to do?");
const todos =[' Arrange in order','Seperate','Groupwise'];
while(input!=='quit' && input!=='q' ){
    if(input==='list'){
        console.log('************')
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************')
        }else if(input==='new'){
            const newTodo =prompt('OK,What is the nw todo?');
            todos.push(newTodo);
            console.log(`${newTodo} added to the list!`);
        }else if(input==='delete'){
            const index=parseInt(prompt('OK,enter an index to delete'));
            if(!Number.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`Ok ,deleted ${deleted[0]}`);
            }else{
                console.log('unknown index')
            }

        }

    input=prompt("what could you like to do?");
}
console.log('OK QUIT THE APP')