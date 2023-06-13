let container = document.querySelector(".container");
let popup = document.querySelector("#popup");
let btn = document.querySelector(".btn");
let close = document.querySelector(".close");

popup.style.display = "none"

btn.addEventListener("click", function(){
    container.classList.toggle("active");

    popup.style.display = "block";
});

close.addEventListener("click", function(){
    popup.style.display = "none"
    container.classList.remove("active");
});


