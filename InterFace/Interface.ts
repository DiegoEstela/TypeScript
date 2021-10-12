
interface Todo{
    title: string;
    text: string;
}

function ShowToDo(todo: Todo){
    return `${todo.title} - ${todo.text}`
}

let myTodo: Todo = {title: "mirar serie", text: "mirar Lost durante la cena"}

document.write(ShowToDo(myTodo));