import"./modulepreload-polyfill-B5Qt9EMX.js";import"./index.esm-BeIn6wDe.js";import{initializeApp as r}from"https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";import{getAuth as i,signInWithEmailAndPassword as d}from"https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";const l={apiKey:"AIzaSyCJdMdkW5NZF83PLBLYZk3yBAFsUxqautY",authDomain:"atpib-82d72.firebaseapp.com",projectId:"atpib-82d72",storageBucket:"atpib-82d72.firebasestorage.app",messagingSenderId:"938927546204",appId:"1:938927546204:web:ea096f1dfe3b3754dd6b99",measurementId:"G-G3BRPK5B9T"},m=r(l),g=i(m),c=(o,n)=>{const e=document.getElementById("login-btn");e.disabled=!0,e.textContent="Logging in...",d(g,o,n).then(t=>{const a=t.user;console.log("User logged in:",a),window.location.href="dashboard.html"}).catch(t=>{const a=t.code,s=t.message;console.error("Error during login:",a,s),e.disabled=!1,e.textContent="Log In",alert("Invalid email or password. Please try again.")})};document.querySelector("form").addEventListener("submit",o=>{o.preventDefault();const n=document.getElementById("email").value,e=document.getElementById("password").value;c(n,e)});