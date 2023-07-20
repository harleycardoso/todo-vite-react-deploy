import React, { useState } from 'react'

const Todoform = ({addTodo}) => {
  const [value,setValue] = useState("");
  const [categoria,setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !categoria) return;
    
    addTodo(value,categoria);

    setValue("");
    setCategoria("");
    
  }
  return (
    <div className='content'>
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Texto:</label>
        <input 
            type="text"
            value={value} 
            placeholder='Digite uma tarefa!'
            onChange={(e)=> setValue(e.target.value)}/>
        <label htmlFor="">Categoria:</label>
        <select 
            name="categoira"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
        >
            <option value="">Selecionar..</option>
            <option value="Estudo">Estudo</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
        </select>
        <button type='submit'>Criar tarefa</button>
    </form>
    </div>
  )
}

export default Todoform