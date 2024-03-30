'use client'
import { useState,useEffect } from "react"
import { getDoc, doc} from "firebase/firestore";
import { auth } from "../firebase_criant.js"
import db from "../firebase_criant.js"

export default function Mainpage() {
    let [mail, setmail] = useState("未ログイン");
    let [userName, setuserName] = useState("未ログイン");

    useEffect(() => {
        const user = auth.currentUser;
        if (user !== null) {
            const email = user.email;
            setmail(email)

            let uid = user.uid
            console.log(uid)

            const get = async () => {
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    console.log(docSnap.data());
                }else{
                  console.log("No such document!");
                };
              };
            
            setuserName(get)
          };
        }, []
    );

    return (
        <>
            <header>{mail}{userName}</header>
            ログインしました。
            <br></br>
        </>
    )
}