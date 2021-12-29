import React from "react";
import HomeComponent from "../Components/home";
import Navbar from "../Components/navbar";

export default function Home({ user }) {
  return (
    <>
      <Navbar user={user} />
      <HomeComponent user={user} />
    </>
  );
}
