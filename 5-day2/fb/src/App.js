import React, { useState, useEffect } from 'react';
import auth from './firebase';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './routes/Auth';
function App() {
  const [loginState, setLoginState] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            setLoginState(user)
            console.log(user);
        } else {
            setLoginState(null)
        }
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth loginState={loginState}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
