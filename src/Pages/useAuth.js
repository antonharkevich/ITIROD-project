import { useState, useEffect } from 'react'
import { getAuth }  from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase';




function useAuth() {
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    pending: true,
    user: null,
    userName: null
  })

  useEffect(() => {
    const unregisterAuthObserver = getAuth().onAuthStateChanged(user =>{
        if(user){
                const docRef = doc(db, 'users', user.uid);
                var userName = 'NO';
                getDoc(docRef).then(docSnap=>{
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                        userName = docSnap.data().name;
                        console.log(userName)
                        setAuthState({ user, pending: false, isSignedIn: !!user, userName })
                    } else {
                    // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                });
        }
        }
    )
    return () => unregisterAuthObserver()
  }, [])

  return { getAuth, ...authState}
}


export {useAuth}