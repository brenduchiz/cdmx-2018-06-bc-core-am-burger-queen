import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCnjRYtIHlb8hvQmM2WWW7VkJPzqyK52jc",
    authDomain: "burger-queen-75467.firebaseapp.com",
    databaseURL: "https://burger-queen-75467.firebaseio.com",
    projectId: "burger-queen-75467",
    storageBucket: "burger-queen-75467.appspot.com",
    messagingSenderId: "550959473561"
  };
  const firebaseApp = firebase.initializeApp(config);



  export default  firebaseApp;