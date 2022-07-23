import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLogin, setisLogin] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const singInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
      setisLogin(false);

    });
    return () => unsubscribed;
  }, [])


  const logout = () => {
    setIsLoading(true);
    signOut(auth).then(() => {

    }).catch((error) => {
      setError(error);
    })
      .finally(() => setIsLoading(false));

  }
  return {
    user,
    setUser,
    singInUsingGoogle,
    logout,
    setIsLoading,
    setError,
    isLoading
  }
};


export default useFirebase;