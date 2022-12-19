import React, { useState } from 'react'
import TodoList from './TodoList';
import AddTodo from './AddTodo';
 

let nextId = 4;
const initialTodos = [
  { id: 1,text:  "Learn django",done: false},
  { id: 2,text:  "Learn ML",done: true},
  { id: 3,text:  "Learn react",done: true},     
];
export default function TodoApp() {

 
 const  [todos, settodos] = useState(initialTodos)
 function handleAddTodo(text){
   settodos([...todos,{

   id:nextId++,
   text,
   done:false
}]);
}  

function handleTodoChange(updatedTodo){
  settodos(
  todos.map((existingTodo) => {
   if (existingTodo.id === updatedTodo.id) { 
    return updatedTodo;
}
else{
  return existingTodo;
}
  })
  );

}

function handleTodoDelete(todoId){
  settodos(todos.filter((todo)=>todo.id !== todoId));


}


  return (
 <>
<h2>Todos</h2>
<AddTodo onAddTodo={handleAddTodo}/>
<TodoList todos={todos} onTodoChange={handleTodoChange} onTododDelete={handleTodoDelete}/>
</> );

}
