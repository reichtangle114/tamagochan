'use client'
import { useState,useEffect } from "react"
import { getDoc, doc} from "firebase/firestore";
import { auth } from "../firebase_criant.js"
import db from "../firebase_criant.js"

export default function Mainpage() {
    let [mail, setmail] = useState("");
    let [userName, setuserName] = useState("");

    useEffect(() => {
        const user = auth.currentUser;
        if (user !== null) {
            const email = user.email;
            setmail(email)

            let uid = user.uid
            console.log(uid)

            const docRef = doc(db, "cities", "SF");
            const docSnap = getDoc(docRef);
            setuserName(docSnap)
        }}, []
    );

    return (
        <>
            <header>{mail}{userName}</header>
            ログインしました。
            <br></br>
        </>
    )
}