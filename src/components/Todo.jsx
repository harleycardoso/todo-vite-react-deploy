import React from 'react'


const todo = ({todo,removeTodo,completeTodo}) => {
    
  return (
    <div className='todo' >   
        <div className="content" style={{textDecoration: todo.completo ? "line-through" : ""}}>
        <p>{todo.texto}</p>
        <p>({todo.categoria})</p>
        <button onClick={()=>completeTodo(todo.id)}>Completar</button>
        <button onClick={()=>removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default todo