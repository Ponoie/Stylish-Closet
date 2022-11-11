const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".Back1");
const nextBtnSec = document.querySelector(".Next2");
const prevBtnThird = document.querySelector(".Back2");
const submitBtn = document.querySelector(".Submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet")

firstNextBtn.addEventListener("click",function() {
    slidePage.style.marginLeft = "-33.3%";
    bullet[0].classList.add("active");
    progressCheck[0].classList.add("active");
});

nextBtnSec.addEventListener("click",function() {
    slidePage.style.marginLeft = "-66.7%";
    bullet[1].classList.add("active");
    progressCheck[1].classList.add("active");
});

prevBtnSec.addEventListener("click",function() {
    slidePage.style.marginLeft = "0%";
    bullet[0].classList.remove("active");
    progressCheck[0].classList.remove("active");
});

prevBtnThird.addEventListener("click",function() {
    slidePage.style.marginLeft = "-33.3%";
    bullet[1].classList.remove("active");
    progressCheck[1].classList.remove("active");
});

submitBtn.addEventListener("click" ,function(){
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    setTimeout(function() {
        alert("You're successfully Signed up!!");
        location.reload();
    } ,800);
});
