localStorage.setItem("userID", "Saxeli Gvari"); 
const userName = localStorage.getItem("userID");
console.log(userName); // Saxeli Gvari

localStorage.removeItem("userID");
localStorage.clear();


sessionStorage.setItem("userID2", "Saxeli Gvari");
sessionStorage.getItem("userID2"); 
sessionStorage.removeItem("userID2"); 
sessionStorage.clear(); 


// cookies დაყენება 
document.cookie = "username=JohnDOE; expires=THU, 18 Dec 2025 12:00 GMT; PATH=/";
let cookies = document.cookie
console.log(cookies);