import React from 'react'

const Filtro = ({filtro,setFiltro, setOrdem}) => {
  return (
    <div className='filter'>
            <h2>Filtrar</h2>
        <div className='filter-options'>
            <p>Status</p>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="all">Todos</option>
                <option value="completed">Completos</option>
                <option value="incomplete">A Fazer</option>
            </select>
        </div>
        <h2>Ordenar</h2>
        <div>
            <button onClick={() => setOrdem("ASC")}>ASC</button>
            <button onClick={() => setOrdem("DESC")}>DESC</button>
        </div>
    </div>
  )
}

export default Filtro