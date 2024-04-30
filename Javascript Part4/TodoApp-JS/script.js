let todo=[];
let req=prompt("Please enter your request");
while(true){
    if(req == 'quit')
    {
        console.log("Quitting App!");
        break;
    } else if(req == 'list')
    {
        console.log("----------");
        for(let i=0;i<todo.length;i++)
        {
            console.log(i , todo[i]);
        }
        console.log("----------");
    } else if(req == 'add')
    {
        let addelmt=prompt("Please enter the task you want to add");
        todo.push(addelmt);
        console.log("Task Added");
    } else if(req == 'delete')
    {
        let idx=prompt("Please enter the task index you want to delete.");
        todo.splice(idx,1);
        console.log("Task Deleted");
    } else{
        console.log("Wrong Request!!!");
    }
    req = prompt("Please enter your request");
}