import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        /*  console.log("user", user) */
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
        redirectLogin("/loginfailed", { replace: true });
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  };
  const redirectLogin = useNavigate();
  const userLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        /*   console.log("user", user) */
        setUser(user);

        // ...
      })
      .catch((error) => {
        redirectLogin("/loginfailed", { replace: true });
        const errorCode = error.code;
        const errorMessage = error.message;
        /*    console.log("error", error) */
        setError(error);
      });
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        /*   console.log("user", user) */
        setUser(user);
        // ...
      } else {
        setUser(null);
        // User is signed out
        // ...
      }
    });
  };

  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        /*   console.log("error", error); */
        setError(error);
      });
  };

  const resetpassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(`Password reset email sent successfully`);
        /* console.log("Password reset email sent"); */

        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Email address is not in our database`);
        /* console.log("error", error); */
        setError(error);
        // ..
      });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        registerNewUser,
        userLogIn,
        userLogOut,
        resetpassword,
        error,
        setError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
