import React from "react";
import Login from "../Components/login";
import Navbar from "../Components/navbar";

export default function LoginPage({ user }) {
  return (
    <>
      <Navbar user={user} />
      <Login />
    </>
  );
}
