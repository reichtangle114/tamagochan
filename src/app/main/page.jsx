'use client'
import { useState,useEffect } from "react"
import { auth } from "../firebase_criant.js"

export default function Mainpage() {
    let [jyouhou, setjyouhou] = useState("");

    useEffect(() => {
        const user = auth.currentUser;
        console.log(auth)
        if (user !== null) {
            const email = user.email;
            setjyouhou(email)
        }}
    );

    return (
        <>
            <header>{jyouhou}</header>
            ログインしました。
            <br></br>
        </>
    )
}