import React, { useState } from 'react'
import Modal from './components/Modal.jsx'
import './components/Modal.css'

function App() {
  const [isOpen, setModalOpen] = useState(false);
  const Open = () => {
    setModalOpen(true);
  };
  return (
    <>
      <h2><b>안녕하세요!</b></h2>
      <p><b>내용내용내용</b></p>
      <button id="modal-open" onClick={Open}>버튼 열기</button>
      {isOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
}

export default App