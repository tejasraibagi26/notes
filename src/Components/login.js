import React from "react";
import { BsGoogle } from "react-icons/bs";
import { signInWithGoogle } from "../services/firebase";

import "../CSS/login.css";

export default function Login() {
  return (
    <section id="login">
      <div className="container">
        <div className="login">
          <h1 className="login-title">Login</h1>
        </div>
        <div className="google-btn" onClick={signInWithGoogle}>
          <BsGoogle />
          <span>Login with Google</span>
        </div>
      </div>
    </section>
  );
}
