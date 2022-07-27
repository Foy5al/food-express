import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
  const [userName, setUserName] = useState('');
  const [password, setPass] = useState('');
  const [mail, setMail] = useState('');
  const [user, setUser] = useState({});
  const [isLogin, setisLogin] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const singInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const singInUsingGithub = () => {
    // setisLogin(true);
    return signInWithPopup(auth, githubProvider)
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

  const handleRegister = e => {
    e.preventDefault();//prevent default ke upore na dile error er dile seta dhorar age reload hoye jabe
    //password length validation
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    //password regex test
    if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError('Password should be minimum 6 characters, at least one letter and one number');
      return;
    }
    isLogin ? loginRegisterUser(mail, password) : registeruser(mail, password);

  }
  // register new user
  const registeruser = (mail, password) => {
    createUserWithEmailAndPassword(auth, mail, password)
      .then((result) => {
        // verifyUserMail();
        updateUserName();
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
  }

  //set user name
  const updateUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: userName
    }).then(() => { })
      .catch((error) => {
        setError(error.message);
      })
  }

  //login register user
  const loginRegisterUser = (mail, password) => {
    signInWithEmailAndPassword(auth, mail, password)
      .then((result) => {
        setError('');
      })
      .catch((error) => {
        setError(error.message)
      })

  }
  return {
    user,
    setUser,
    singInUsingGoogle,
    singInUsingGithub,
    logout,
    setIsLoading,
    setError,
    isLoading,
    handleRegister
  }
};


export default useFirebase;