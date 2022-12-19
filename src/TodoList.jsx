import React from 'react'
import todo from './TodoApp'
import './TodoList.css'

export default function TodoList({todos,onTodoChange,onTododDelete }) {
  return (
   <ul className="todo-list">
{todos.map((todo)=>( 
<li key={todo.id}>

<Todo todo={todo} onChange={onTodoChange} onDelete={onTododDelete}/>
</li>
))}
  </ul>
  );
}


function Todo({ todo,onChange, onDelete}){
return <>
  <input type="checkbox" name={`${todo.id}-done`} id={`${todo.id}-done`} checked={todo.done} onChange={(e)=>{
    onChange({...todo, done: e.target.checked});
  }}

  /> 
  {todo.text} 
  <button onClick={()=> onDelete(todo.id)}>DEL</button>
</>

}
