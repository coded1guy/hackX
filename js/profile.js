let coll = document.getElementsByClassName('drop-btn');
let i;
 
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function(){
	 this.classList.toggle("active");
	 let content = this.nextElementSibling;
	 if (content.style.maxHeight) {
	   content.style.maxHeight = null;
	 } else {
	   content.style.maxHeight = content.scrollHeight + "px";
	 }
   });
 }

 const ham = document.querySelector('.hamburger');
 const nav = document.querySelector('.nav-content');
 ham.addEventListener('click', () => {

   if (nav.className === 'nav-content') {
	 nav.classList.add('responsive');
   } else {
	 nav.className = 'nav-content';
   }
 });
// BACKEND STUFFS
 const headers = {
	'Content-Type': 'application/json',
	'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
	'withCredentials': true,
  }
  //const username = window.localStorage.getItem("username");
  const username = "emmo";

 axios.get("https://hackxbackend.herokuapp.com/getuser", { headers: headers}, username)
 .then (function (response) {
	 console.log(response);
 })
 .catch (function (error) {
	 console.log(error);
 })