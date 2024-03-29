window.setTimeout(function() {
    let todos = ["Buy new turtle"];

    let input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
    console.log("You quit the app.");

    function listTodos() {
        console.log("**********");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
    }

    function addTodo() {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added Todo");
    }

    function deleteTodo() {
        let index = prompt("Enter index of todo");
        todos.splice(index, 1);
        console.log("Deleted Todo");
    }
}, 500);
