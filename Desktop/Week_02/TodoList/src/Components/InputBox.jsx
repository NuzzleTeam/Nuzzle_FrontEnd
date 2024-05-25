import React from "react"
import './Components.css'

function InputBox({setTodos}) {

    const [inputValue, setInputValue] = useState("");

    const addTodo = (e) => {
        if(e.key === "Enter" && inputValue.trim() !== "") {
            setTodos(prevTodos => [
                ...prevTodos,
                { id: Date.now(), content: inputValue, isDone: false }
            ]);
            setInputValue("");
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <div className="todo-input">
                <input type="text" placeholder="UMC 스터디 계획을 작성해보세요!" 
                value={inputValue} onChange={handleChange}
                onKeyDown={addTodo}></input>
            </div>
        </>
    )
}

export default InputBox;