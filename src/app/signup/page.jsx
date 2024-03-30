'use client'
import { useState } from "react"
import { auth,db } from "../firebase_criant.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

export default function Singup() {
    let [userName, setuserName] = useState("");
    let [mail, setmail] = useState("");
    let [pass, setpass] = useState("");
    let [passsai, setpasssai] = useState("");

    function submit() {
        if(pass == passsai){
            createUserWithEmailAndPassword(auth, mail, pass)
              .then((userCredential) => {
                // Signed in ここでDBにぶち込む
                const user = userCredential.user;
                if(user) {
                  const uid = user.uid
                  const userInitialData = {
                    mail: mail,
                    uid: uid,
                    userName: userName
                  }
                  console.log(uid)
                  setDoc(doc(db,"users",uid ),{userInitialData});
                }
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
    ユーザー名:
    <input id="username" className='kuromoji' type="text" value={userName} onChange={(event) => { setuserName(event.target.value) }} />
    <br></br>
    メールアドレス:
    <input id="mail" className='kuromoji' type="text" value={mail} onChange={(event) => { setmail(event.target.value) }} />
    <br></br>
    パスワード:
    <input id="pass" className='kuromoji' type="password" value={pass} onChange={(event) => { setpass(event.target.value) }} />
    <br></br>
    パスワード再入力:
    <input id="passsai" className='kuromoji' type="password" value={passsai} onChange={(event) => { setpasssai(event.target.value) }} />
    <button type="button" onClick={submit}>アカウント作成</button>
    <style>{`.kuromoji{color: black;}
                .otameshi{margin: 30px 15px;}`}</style>
        </>
    )
}