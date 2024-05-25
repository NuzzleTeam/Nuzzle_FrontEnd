import React, {useState} from 'react'
import './App.css'
import Modal from './Components/Modal'

function App() {
  const [modalPop, setmodalPop] = useState(false);
  const open = () => {
    console.log('모달이 켜짐');
    setmodalPop(true);
  }
  const close = () => {
    console.log('모달이 꺼짐');
    setmodalPop(false);
  }

  return (
    <>
      <div className="main-wrapper">
        <h1>안녕하세요!</h1>
        <p>내용내용내용</p>
        <button onClick={open}>버튼 열기</button>
      </div>
      {modalPop && <Modal onClose={close}/>}
    </>
  )
}

export default App;