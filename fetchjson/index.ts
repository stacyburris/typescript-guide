import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interface is used to define the structure of an object
// create a new type called Todo
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // response.data has propertied of: 
  // id, title, completed
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);

});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
  `);
}