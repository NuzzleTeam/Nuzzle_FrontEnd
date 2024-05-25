import { useState } from 'react'
import './App.css'
import Title from './Components/Title'
import InputBox from './Components/InputBox'
import List from './Components/List'

function App() {

  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  return (
    <>
      <div className='todo-wrapper'>
        <Title></Title>
        <InputBox setTodos={setTodos}></InputBox>
        <List></List>
      </div>
    </>
  )
}

export default App;