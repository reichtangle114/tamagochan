'use client'
import { useState } from "react"
import { auth } from "../firebase_criant.js"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'

export default function login() {
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
    <input id="test" className='kuromoji' type="text" value={mail} onChange={(event) => { setmail(event.target.value) }} />
    <input id="test" className='kuromoji' type="password" value={pass} onChange={(event) => { setpass(event.target.value) }} />
    <button type="button" onClick={submit}>ログイン</button>
    <style>{`.kuromoji{color: black;}
                .otameshi{margin: 30px 15px;}`}</style>
        </>
    )
}