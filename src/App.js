import React, { useState, useEffect } from 'react';
import fbase from './util/firebase';
import Login from './components/Login/Login';
import Hero from './components/HomePage/homePage';
import firebase from 'firebase';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearErrors();
    fbase.auth().signInWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-not-found":
          case "auth/user-disabled":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignUp = () => {
    clearErrors();
    fbase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLoginWithGoogle = () => {
    clearErrors();
    fbase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

  const handleLogout = () => {
    fbase.auth().signOut();
  }

  const authListener = () => {
    fbase.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else{
        setUser("");
      }
    })
  }

  useEffect(()=>{
    authListener();
  }, [])

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
        <Login 
          email={email} 
          setEmail={setEmail} 
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          handleLoginWithGoogle={handleLoginWithGoogle}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          clearInputs={clearInputs}
          clearErrors={clearErrors}
        />
      )}

      
    </div>
  );
}

export default App;
