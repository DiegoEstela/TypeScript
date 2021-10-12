function ShowToDo(todo) {
    return todo.title + " - " + todo.text;
}
var myTodo = { title: "mirar serie", text: "mirar Lost durante la cena" };
document.write(ShowToDo(myTodo));
