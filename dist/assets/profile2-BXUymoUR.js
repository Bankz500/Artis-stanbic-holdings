import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as i}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";import{getAuth as s,onAuthStateChanged as d}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";import{getFirestore as m,getDoc as c,doc as u}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";const f={apiKey:"AIzaSyCJdMdkW5NZF83PLBLYZk3yBAFsUxqautY",authDomain:"atpib-82d72.firebaseapp.com",projectId:"atpib-82d72",storageBucket:"atpib-82d72.firebasestorage.app",messagingSenderId:"938927546204",appId:"1:938927546204:web:ea096f1dfe3b3754dd6b99",measurementId:"G-G3BRPK5B9T"},n=i(f),p=s(n),g=m(n);window.onload=function(){document.getElementById("profileInfoCard").classList.remove("hidden"),d(p,async a=>{if(a){console.log("User auth data:",a);const l=document.getElementById("email"),e=document.getElementById("firstName");l.placeholder=a.email,l.value=a.email;try{const o=await c(u(g,"users",a.uid));if(console.log("User database data:",o.data()),o.exists()){const t=o.data();if(t.firstName&&t.lastName){const r=`${t.firstName} ${t.lastName}`;e.value=r,e.placeholder=r}else t.firstName?(e.value=t.firstName,e.placeholder=t.firstName):(e.value="No name set",e.placeholder="No name set")}else a.displayName?(e.value=a.displayName,e.placeholder=a.displayName):(e.value="No name set",e.placeholder="No name set")}catch(o){console.error("Error fetching user data:",o),e.value="Error loading name",e.placeholder="Error loading name"}}else console.log("No user signed in")})};window.updateProfile=function(){const a=document.getElementById("saveChangesButton"),l=a.textContent;a.disabled=!0,a.textContent="Processing...",setTimeout(function(){try{const e=document.getElementById("firstName").value.trim();if(!e){alert("Please enter valid information for full name.");return}localStorage.setItem("fullName",e),alert("Profile updated successfully!")}catch(e){console.error("Error updating profile:",e),alert("An error occurred while updating your profile. Please try again.")}finally{a.disabled=!1,a.textContent=l}},2e3)};