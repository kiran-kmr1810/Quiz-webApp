import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBxjFa5qu1gVuwiDJQ_csDBR41uTRWJMFc",
    authDomain: "quiz-webapp-2a006.firebaseapp.com",
    projectId: "quiz-webapp-2a006",
    storageBucket: "quiz-webapp-2a006.appspot.com",
    messagingSenderId: "1073750431729",
    appId: "1:1073750431729:web:017a1b0efe269f8af7d650"
  };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;