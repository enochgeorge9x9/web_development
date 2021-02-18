//Create a while loop unitl the user get the right command
//Ask for Input "What would you like to do?"
    //if add
        //Prompt Enter new todo list and add to the list with index
        //and show the list was added "** was added"
    //if list
        //List all the ToDo List 
    //if delete
        //Remove the todo with the index using the splice method
    //if quit
        //exit from the while loop

//show you have quit the app

const todo = ["Hi", "There", "This is the test"];
let command = prompt("What would you like to do?");

while(command !== "quit")
{

    if(command === "add")
    {
        const new_item = prompt("Enter your new Todo item");
        todo.push(new_item)
        console.log(`${new_item} was added to the list`)
    }
    else if(command === "list")
    {
        console.log('********************')
        for(let i=0; i<todo.length; i++)
        {
            console.log(`${i}: ${todo[i]}`)
        }
        console.log('********************')
    }
    else if(command === "delete")
    {
        const index = parseInt(prompt("Enter which index you would like to delete"));
        if(!Number.isNaN(index)){
            const del = todo.splice(index,1);
            console.log(`${del[0]} has been deleted from the list`)
        }
        else{
            console.log("UNKNOWN INDEX.")
        }
    }
    command = prompt("What would you like to do?")

}
console.log("YOU QUIT THE APP")

