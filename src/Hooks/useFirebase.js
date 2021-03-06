import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/Firebase.init";
initializeAuth()

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

     const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            
    }

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({ })
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
    }, [isLoading])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }
    return {
        user,
        googleSignIn,
        isLoading,
        logOut

    }

};

export default useFirebase;