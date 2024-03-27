'use client'
import { useState } from "react"
import { auth } from "../firebase_criant.js"

export default function mainpage() {
    let [jyouhou, setjyouhou] = useState("");

    const useUser = () => {
        const user = auth.currentUser;
        console.log(auth)
        if (user !== null) {
            const email = user.email;
            setjyouhou(email)
        }
      };
    return (
        <>
            ログインしました。
            <br></br>
            <button type="button" onClick={useUser}>表示</button>
            {jyouhou}
        </>
    )
}