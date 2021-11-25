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

// Show why TS is handy
// 1. Import axios to make network request to get data from jsonplaceholder
// 2. Compile file to plan JS code by tsc name of file (index.ts)
// 3. Run node index.js 
// Gets old to compile and then run
// Instead use ts-node <name of file> index.ts to compile and run

// Create an interface called Todo
// Use the interface to define the structure of an object
