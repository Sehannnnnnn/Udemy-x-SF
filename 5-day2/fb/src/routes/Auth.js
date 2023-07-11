import React, {  useState, useEffect } from 'react'
import auth from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

function Auth({loginState, setLoginState}) {
    const [loginInfo, setLoginInfo] = useState({
        EMAIL: '',
        PW: '', 
    })
    const [toggle, setToggle] = useState(false);

    const onInputHandler = (event) => {
        const {name, value} = event.target;
        setLoginInfo({
            ...loginInfo,
            ...{[name] : value}
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        let data;
        try {
            if (toggle) {
                //회원가입
                data = signInWithEmailAndPassword(auth, loginInfo.EMAIL, loginInfo.PW);
            } else {
                //로그인
                data = createUserWithEmailAndPassword(auth, loginInfo.EMAIL, loginInfo.PW)
            }
            setLoginInfo({
                    EMAIL: '',
                    PW: '', 
            })
        } catch (error) {
            console.log(error)
        }
    }
    const onLogout = (event) => {
        auth.signOut();
        setLoginState(null);
    }

  return (
    <div>
        {loginState ? 
        <div>
            <div>{loginState.email}</div>
            <button onClick={onLogout}>로그아웃 하기</button>
        </div>
        :
        <div> 
            <form onSubmit={onSubmitHandler}>
                <input name="EMAIL" type="text" placeholder='아이디를 입력하세요' onChange={onInputHandler} value={loginInfo.EMAIL}></input>
                <input name="PW" type="password" placeholder='비밀번호를 입력하세요' onChange={onInputHandler} value={loginInfo.PW}></input>
                <input type="submit" value={toggle ? "로그인" : "회원가입"}></input>
            </form>
            <div onClick={() => setToggle((prev) => !prev)}>
                {toggle ? "로그인할래요" : "회원가입 할래요"}
            </div>
        </div>}
    </div>
  )
}

export default Auth