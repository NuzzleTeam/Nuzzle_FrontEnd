import React from "react"
import './Components.css'
import InputBox from "./InputBox"

function List() {
    return(
        <>
            <div className="list-wrapper">
                <div className="todo" id="before">
                    <p>해야할 일</p>
                </div>
                <div className="todo" id="after">
                    <p>해낸 일</p>
                </div>
            </div>
        </>
    )
}

export default List;