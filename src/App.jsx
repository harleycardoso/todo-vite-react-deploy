import { useState } from 'react'
import Todo from './components/Todo'
import Todoform from './components/Todoform'
import Search from './components/Search'
import Filtro from './components/Filtro'

function App() {
  const [search,setSearch] = useState("");
  const [ordem,setOrdem] = useState("");
  const [todos, setTodos] = useState([
    {
      id:1,
      texto: "Criar funcionalidade x no sistema",
      categoria: "Trabalho",
      completo: false
    },
    {
      id:2,
      texto: "Ir para academia",
      categoria: "Pessoal",
      completo: false
    },
    {
      id:3,
      texto: "Estudar React",
      categoria: "Estudos",
      completo: false
    },
  ])

const addTodo=(t,c) => {
  const newTodo = [...todos,{
    id: Math.floor((Math.random()*1000)),
    texto: t,
    categoria: c,
    completo: false
  }];
  setTodos(newTodo);
  //console.log(newTodo)
}; 

const removeTodo = (id) =>{
  const newTodo = [...todos];
  const filterTodo = newTodo.filter((todo)=> 
    todo.id !== id ? todo:null
  );
  setTodos(filterTodo);
}

const completeTodo = (id) =>{
  const newTodo = [...todos];
  newTodo.map((todo) => todo.id === id ? (todo.completo = !todo.completo):todo);
  setTodos(newTodo);
  
}

const [filtro,setFiltro] = useState("all");

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filtro filtro={filtro} setFiltro={setFiltro} setOrdem={setOrdem}/>
      <div className='todo-lista'>
        {todos
        .filter((todo)=> filtro === "all" ? true : filtro === "completed" ? todo.completo : !todo.completo)
        .filter((todo)=>todo.texto.toLowerCase().includes(search.toLowerCase()))
        .sort((a,b)=> ordem === "ASC" ? a.texto.localeCompare(b.texto) : b.texto.localeCompare(a.texto))
        .map((todo)=>(
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <div className='todo-form'>
        <Todoform addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
