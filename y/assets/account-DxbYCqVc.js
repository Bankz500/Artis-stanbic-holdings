import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as r}from"https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";import{getAuth as i,createUserWithEmailAndPassword as c}from"https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";const d={apiKey:"AIzaSyDyZiL4-h5n9Kqr24e7liROgHXMZau2ZmI",authDomain:"artis-stanbic-holdings.firebaseapp.com",projectId:"artis-stanbic-holdings",storageBucket:"artis-stanbic-holdings.firebasestorage.app",messagingSenderId:"124094989669",appId:"1:124094989669:web:54e6306dc5747a80ec8d8c",measurementId:"G-0WSC5YMY2C"},m=r(d),u=i(m),l=(n,o)=>{const e=document.getElementById("create-account-btn");e.disabled=!0,e.textContent="Opening Account...",c(u,n,o).then(t=>{const s=t.user;console.log("User signed up:",s),window.location.href="online-banking.html"}).catch(t=>{const s=t.code,a=t.message;console.error("Error during sign-up:",s,a),e.disabled=!1,e.textContent="Create Account"})};document.querySelector("form").addEventListener("submit",n=>{n.preventDefault();const o=document.getElementById("email").value,e=document.getElementById("password").value;l(o,e)});