import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  return {
    setUser,
    singInUsingGoogle
  }
};


export default useFirebase;