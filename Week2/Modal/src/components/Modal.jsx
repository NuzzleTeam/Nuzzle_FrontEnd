import React from 'react'
import './Modal.css'

function Modal({setModalOpen}){
    const Close = () => {
        setModalOpen(false);
      };
    return(
        <>
            <div id="modal-wrapper">
                <div id="modal-content">
                    <div id="modal-body">
                        <p>안녕하세요</p>
                        <p>모달 내용은 어쩌고 저쩌고..</p>
                    </div>
                    <div id="modal-close">
                        <button id="close" onClick={Close}>닫기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;