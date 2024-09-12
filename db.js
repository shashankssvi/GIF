
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHZ8VcgJvJaQ4-P0l46tkWN2kbyi6bq4k",
  authDomain: "gif-p1.firebaseapp.com",
  projectId: "gif-p1",
  storageBucket: "gif-p1.appspot.com",
  messagingSenderId: "1033545220526",
  appId: "1:1033545220526:web:7bf6b6e9406cbe1d59883f"
};

const app = initializeApp(firebaseConfig);
  
const sub = document.getElementById("signup");
sub.addEventListener("click",function(){
  const auth = getAuth();
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  alert(email);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (AuthErrorCodes){
        alert("alredy exists");
      }
      alert(errorCode,errorMessage);
      // ..
    }
  );
})

const sub1=document.getElementById("login");
sub1.addEventListener("click",function(){
  const auth = getAuth();
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location.href="home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("inv").innerText="invalid email or password";
  });
})