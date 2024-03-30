'use client'
import { useState } from "react"
import { auth } from "../firebase_criant.js"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'

export default function Login() {
    const [mail, setmail] = useState("");
    const [pass, setpass] = useState("");
    const router = useRouter()

    function submit() {
        signInWithEmailAndPassword(auth, mail, pass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            router.replace('/main') // ここで、リダイレクト

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }

    return (
        <>
    メールアドレス
    <br></br>
    <input id="mail" className='kuromoji' type="text" value={mail} onChange={(event) => { setmail(event.target.value) }} />
    <br></br>
    パスワード
    <br></br>
    <input id="password" className='kuromoji' type="password" value={pass} onChange={(event) => { setpass(event.target.value) }} />
    <br></br>
    <button type="button" className='fuchi' onClick={submit}>ログイン</button>
    <style>{`.kuromoji{color: black;}
             .fuchi{
                padding: 0.5em 1em;
                margin: 2em 0;
                font-weight: bold;
                color: #6091d3;
                background: #FFF;
                border: solid 3px #6091d3;
                border-radius: 10px;
            }
            `}</style>
        </>
    )
}