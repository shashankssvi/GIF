
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };

  const app = initializeApp(firebaseConfig);
  
  const sub = document.getElementById("submit");
sub.addEventListener("click",function(){
  const auth = getAuth();
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  alert(email);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("created");
      // ...
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

const sub1=document.getElementById("signin");
sub1.addEventListener("click",function(){
  const auth = getAuth();
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  alert(email)
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location.href="page1.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
})