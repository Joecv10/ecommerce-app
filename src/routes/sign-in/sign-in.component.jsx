import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  useEffect(() => {
    console.log("getRedirectUser function called");
    getRedirectResult(auth)
      .then((response) => {
        console.log("getRedirectResult response:", response);
        if (response) {
          createUserDocFromAuth(response.user)
            .then((userDocRef) => {
              console.log("User document reference:", userDocRef);
            })
            .catch((error) => {
              console.error("Error creating user document:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error getting redirect result:", error);
      });
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
