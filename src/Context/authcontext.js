
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext =  createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user", user)
    // ...
/*     updateProfile(auth.currentUser, {

}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
}); */
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
 const redirectLogin = useNavigate();
  const userLogIn = (email, password) => {
    
/* if (user) {
  redirectLogin("/loginfailed", { replace: true })
} else {
  (redirectLogin("/", { replace: true }));
} */
/* 
      !userLogIn ? redirectLogin("/loginfailed", { replace: true }) : (redirectLogin("/", { replace: true })); */
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user", user)
    setUser(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error", error)
  
  });
  }

  const checkIfUserIsLoggedIn = () => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("user", user)
    setUser(user)
    // ...
  } else {
    setUser(null)
    // User is signed out
    // ...
  }
});
  }

  const userLogOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
      setUser(null);
}).catch((error) => {
  // An error happened.
  console.log("error", error);
});
    
  }

  const resetPass = (email) => {
sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("Password reset email sent")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error", error);
    // ..
  });

   }

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, [])
  


  
  return (
    <AuthContext.Provider value={{ user, setUser, registerNewUser, userLogIn, userLogOut, resetPass}}>
      {props.children}
    </AuthContext.Provider>
  );
};