const users = [
    {
       "username": "Faiz",
       "email": "faiz@gmail.com",
       "contact-number": "0000",
 
    },
    {
       "username": "Anas",
       "email": "Anas@gmail.com",
       "contact-number": "0000",
 
    },
    {
       "username": "Ali",
       "email": "Ali@gmail.com",
       "contact-number": "0000",
 
    },
    {
       "username": "Mustaja Mustufa",
       "email": "Mustaja-Mustufa@gmail.com",
       "contact-number": "0000",
 
    },
 
 ]
 document.getElementById("triangle-topleft-text").innerHTML = users.length
 
 
 
 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
       return;
    }
    if (e.target.closest(".menu-item-has-children")) {
       const hasChildren = e.target.closest(".menu-item-has-children");
       showSubMenu(hasChildren);
    }
 });
 goBack.addEventListener("click", () => {
    hideSubMenu();
 })
 menuTrigger.addEventListener("click", () => {
    toggleMenu();
 })
 closeMenu.addEventListener("click", () => {
    toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
 })
 function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }
 
 function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
       subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function () {
    if (this.innerWidth > 991) {
       if (menu.classList.contains("active")) {
          toggleMenu();
       }
 
    }
 }
 // Function to get current date and time
 function getCurrentDateTime() {
    let currentDate = new Date();
    return ` Date: ${currentDate.toDateString()} | Time: ${currentDate.toLocaleTimeString()}`;
 }
 // Function to get geolocation
 function getGeolocation() {
    return new Promise((resolve) => {
       navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
             let locationString = `Lat: ${coords.latitude.toFixed(2)}, Long: ${coords.longitude.toFixed(2)}`;
             resolve(locationString);
          }
       );
    });
 }
 let geolocationstorage = getGeolocation();
 // Function to update the ticker with date, time, and location
 async function updateTicker() {
    let tickerText = document.getElementById('ticker-text');
    // Get date and time
    let dateTimeString = getCurrentDateTime();
    // Get geolocation
    let locationString = await geolocationstorage;
    // Update ticker with date, time, and location
    tickerText.textContent = `${dateTimeString} | Location: ${locationString}`;
 }
 updateTicker();
 setInterval(updateTicker, 1000);
 // FAQ/SECTION
 let accordion = document.getElementsByClassName("accordion");
 let i;
 
 for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
       this.classList.toggle("active");
       let panel = this.nextElementSibling;
       if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
       } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
       }
    });
 }
 