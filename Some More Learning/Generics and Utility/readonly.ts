interface Task{
    title:string;
    completed: boolean;
}


type ReadTask = Readonly<Task>;
const task: ReadTask={
    title:"Title",
    completed: true
}

console.log(task);

// task.title = "Untitle";
// task.completed = false;