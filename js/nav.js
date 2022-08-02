
//toggle
let toggle= document.querySelector("#toggle-close")
let navContent= document.querySelector(".nav-content")
let expand= document.querySelector("#close-nav")


toggle.addEventListener("click", (event) => {
  navContent.style.display = "none"
  event.stopPropagation();
})

expand.addEventListener("click", (event) => {
  navContent.style.display = "flex"
  event.stopPropagation();
})


document.querySelector(".nav-items-content").addEventListener("click", (event) => {
  let inner = document.querySelector(".nav-nestd-list")
  let pointer = document.querySelector("#pointer")
  inner.classList.toggle('toggle');
  pointer.classList.toggle('toggle');
  // navContent.style.display = "none";
  console.log("am click")
  event.stopPropagation();
})


document.querySelector("#ruby").addEventListener("click", (event) => {
  navContent.style.display = "none";
  event.stopPropagation();
})
document.querySelector("#CSS").addEventListener("click", (event) => {
  navContent.style.display = "none";
  event.stopPropagation();
})
document.querySelector("#django").addEventListener("click", (event) => {
  navContent.style.display = "none";
  event.stopPropagation();
})
document.querySelector("#react").addEventListener("click", (event) => {
  navContent.style.display = "none";
  event.stopPropagation();
})
document.querySelector("#home").addEventListener("click", (event) => {
  navContent.style.display = "none"
})
document.querySelector("#about").addEventListener("click", (event) => {
  navContent.style.display = "none";
  event.stopPropagation();
})
document.querySelector("#sponsor").addEventListener("click", (event) => {
  navContent.style.display = "none"
  event.stopPropagation();
})