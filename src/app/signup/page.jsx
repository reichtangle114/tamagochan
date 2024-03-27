'use client'
import { useState } from "react"
import { auth } from "../firebase_criant.js"
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function singup() {
    let [mail, setmail] = useState("");
    let [pass, setpass] = useState("");
    let [passsai, setpasssai] = useState("");

    function submit() {
        if(pass == passsai){
            createUserWithEmailAndPassword(auth, mail, pass)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode + " " + errorMessage)
              });
        } else {
            setpass("")
            setpasssai("")
        }
    }

    return (
        <>
    メールアドレス
    <input id="test" className='kuromoji' type="text" value={mail} onChange={(event) => { setmail(event.target.value) }} />
    <br></br>
    パスワード
    <input id="test" className='kuromoji' type="password" value={pass} onChange={(event) => { setpass(event.target.value) }} />
    <br></br>
    パスワード再入力
    <input id="test" className='kuromoji' type="password" value={passsai} onChange={(event) => { setpasssai(event.target.value) }} />
    <button type="button" onClick={submit}>アカウント作成</button>
    <style>{`.kuromoji{color: black;}
                .otameshi{margin: 30px 15px;}`}</style>
        </>
    )
}