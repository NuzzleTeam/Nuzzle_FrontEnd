import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import FirstPage from './pages/FirstPage';
import Login from './pages/Login';
import FindId from './pages/FindId';
import FindAccount from './pages/FindAccount';
import NoAccount from './pages/NoAccount';

import SignUp from './pages/SignUp'
import FindPw from './pages/FindPw';
import ChangePw from './pages/ChangePw';

import Policy from './pages/Policy';
import KakaoLogin from './pages/KakaoLogin';
import Connect from './pages/Connect';
import EmailSignUp from './pages/EmailSignUp';
import ConnectComplete from './pages/ConnectComplete';
import SharedLink from './pages/SharedLink';

import { useSelector } from 'react-redux';

function App() {

  // const user = useSelector(state => state.user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/help/findid' element={<FindId/>}></Route>
          <Route path='/help/findpw' element={<FindPw/>}></Route>
          <Route path='/help/changepw' element={<ChangePw/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/signup/email' element={<EmailSignUp/>}></Route>
          <Route path='/policy' element={<Policy/>}></Route>
          <Route path='/sharedlink' element={<SharedLink/>}></Route>
          <Route path='/connect' element={<Connect/>}></Route>
          <Route path='/connect/complete' element={<ConnectComplete/>}></Route>
          <Route path='/login/kakao' element={<KakaoLogin/>}></Route>
          <Route path='/help/findaccount' element={<FindAccount/>}></Route>
          <Route path='/help/noaccount' element={<NoAccount/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;