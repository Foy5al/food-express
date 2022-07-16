import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  console.log(user);

  const auth = getAuth();
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  return {
    user,
    setUser,
    singInUsingGoogle
  }
};


export default useFirebase;