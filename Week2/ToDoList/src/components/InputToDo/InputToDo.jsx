import React, {useState, useEffect} from 'react'
import './InputToDo.css'

function InputToDo({setTodos}) {
  const [inputValue, setInputValue] = useState('');
  //const [todos, setTodos] = useState([]);
  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 빈 배열을 todos 상태로 설정
    setTodos([]);
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

  const addToDo = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, inputValue]); // 이전 상태(prevTodos)를 가져와서 새로운 항목 추가
      setInputValue('');
    }
  };

  return (
    <div className="input-todo">
      <input
        id="inputField"
        type="text"
        placeholder="스터디 계획을 작성해보세요!"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={addToDo}
      />
    </div>
  );
}

export default InputToDo;