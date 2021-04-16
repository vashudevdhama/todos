import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2RgNeeJ0IhisWMHISdhj4aqaG1G5sMZQ",
    authDomain: "todos-58680.firebaseapp.com",
    projectId: "todos-58680",
    storageBucket: "todos-58680.appspot.com",
    messagingSenderId: "115843805899",
    appId: "1:115843805899:web:137216b21668e4279b214e"
  };
  // Initialize Firebase
  const fbase = firebase.initializeApp(firebaseConfig);

  export default fbase;