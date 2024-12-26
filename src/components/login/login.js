import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_lAzhroY-ky5Naiqdr8F_ohzsHzzG_EM",
  authDomain: "odyssey-61161.firebaseapp.com",
  projectId: "odyssey-61161",
  storageBucket: "odyssey-61161.firebasestorage.app",
  messagingSenderId: "937149363388",
  appId: "1:937149363388:web:44d5ec02609e86b0a24cb9"
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function(event){
   event.preventDefault()

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const error_text =document.getElementById('error_message');

   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       error_text.style.display = "block";
       error_text.innerHTML="Logging in..."
       sleep(5000)
       window.location.href="https://127.0.0.1:5500/dashboard.html";
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       error_text.innerHTML="Incorrect Username or Password";
     })
})