import React, { useState } from 'react'
import PageTemplate from './components/PageTemplate/PageTemplate.jsx'
import InputToDo from './components/InputToDo/InputToDo.jsx';
import List from './components/List/List.jsx';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div>
        <PageTemplate>
          <InputToDo setTodos={setTodos}></InputToDo>
          <List todos={todos}></List>
        </PageTemplate>
      </div>
    </>
  );
}

export default App;