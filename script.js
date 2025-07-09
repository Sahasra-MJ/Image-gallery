let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = "auto";
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})


const icon = document.getElementById("icon");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "images/sun.png"; 
} else {
    icon.src = "images/moon.png";
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png"; 
        localStorage.setItem("theme","dark");
    } else {
        icon.src = "images/moon.png";
        localStorage.setItem("theme","light");
    }
};