import React from 'react'
import TodoList from './composants/TodoList'
import TodoAdd from './composants/TodoAdd'

const App = () => {
  return (
    <div>
      <TodoAdd/>
      <TodoList/>
    </div>
  )
}

export default App
