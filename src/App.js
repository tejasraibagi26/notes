import { useState, useEffect } from "react";
import firebase from "./services/firebase";
import LoginPage from "./Pages/login";
import Home from "./Pages/home";
import "./CSS/main.css";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="App">
      {user ? <Home user={user} /> : <LoginPage user={user} />}
    </div>
  );
}

export default App;
