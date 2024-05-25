import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const incCount = () => {
    console.log('increase가 클릭됨');
    setCount(count + 1);
  }

  // 화살표 함수에서 앞에 const 같은 변수 선언 없으면 에러남

  const decCount = () => {
    console.log('decrease가 클릭됨');
    setCount(count - 1);
  }

  return (
    <>
      <div className='counter-wrapper'>
        <div className='number'>
          <h1>{count}</h1>
        </div>
        <div className='btn'>
          <button id='increase' onClick={incCount}>+1</button>
          <button id='decrease' onClick={decCount}>-1</button>
        </div>
      </div>
    </>
  )
}

export default App;