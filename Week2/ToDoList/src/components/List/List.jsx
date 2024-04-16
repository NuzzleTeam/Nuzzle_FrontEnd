import React, {useState} from 'react'
import './List.css'

function List({todos, setTodos}) {
  console.log(todos);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleComplete = (index) => {
    const updatedTodos = [...todos]; // 기존 할 일 목록을 복사하여 업데이트합니다.
    const completedTodo = updatedTodos.splice(index, 1); // 완료된 할 일을 제거하고 가져옵니다.
    setCompletedTodos((prevCompletedTodos) => [...prevCompletedTodos, completedTodo]); // 완료된 일 목록에 추가합니다.
    setTodos(updatedTodos.splice(index, 1));
  };

  const handleDelete = (index) => {
    const updatedCompletedTodos = [...completedTodos]; // 기존 완료된 일 목록을 복사하여 업데이트합니다.
    updatedCompletedTodos.splice(index, 1); // 해당 인덱스의 완료된 일을 제거합니다.
    setCompletedTodos(updatedCompletedTodos); // 완료된 일 목록을 업데이트합니다.
  };
  console.log(completedTodos);

  return (
    <div className="list-todo">
      <div className="have-todo">
        <h3>해야할 일</h3>
        <ul id="have-todo-list">
          {todos.map((todo, index) => (
            <ul id='have-todo-item' key={index}>{todo}
            <button id="have-todo-btn" onClick={()=>handleComplete(index)}>완료</button>
            </ul>
          ))}
        </ul>
      </div>
      <div className="done-todo">
        <h3>해낸 일</h3>
        <ul id="done-todo-list">
          {completedTodos.map((completedTodo, index) => (
            <ul id='done-todo-item' key={index}>{completedTodo}
            <button id="done-todo-btn" onClick={() => handleDelete(index)}>삭제</button>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;