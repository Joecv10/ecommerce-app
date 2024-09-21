import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import "./authentication.style.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Authentication = () => {
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

  return (
    <>
      <div className="authentication-container">
        {/* <h1>Sign In Page</h1> */}
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
