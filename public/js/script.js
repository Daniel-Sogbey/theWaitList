let section = document.querySelector("#section");
let redirect = document.querySelector("#redirect");
let btn = document.querySelector(".btn");

redirect.style.display = "none";

btn.addEventListener("click", () => {
    section.style.display = "none";
    redirect.style.display = "block";
})