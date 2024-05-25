import React, {useState} from "react"

function Modal({onClose}) {

    return (
        <>  
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-content">
                        <h3>안녕하세요</h3>
                        <p>모달 내용은 어쩌고 저쩌고..</p>                       
                    </div>
                    <div className="closeBtn">
                        <button onClick={onClose}>닫기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;