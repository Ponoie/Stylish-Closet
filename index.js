const adv_search_screen = document.getElementsByClassName("adv_search_screen")[0];
const advertisement = document.getElementsByClassName("advertisement")[0];

let debounce = false;
let ads_trans_percen = 15;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.navbox');
hiddenElements.forEach((el) => observer.observe(el));

function open_adv_search() {
    if (debounce == true) {
        return
    }

    debounce = true;

    adv_search_screen.style.opacity = "1";
    adv_search_screen.style.display = "flex";
    adv_search_screen.style.animationPlayState = "running";
    setTimeout(function() {adv_search_screen.style.animation = "close_adv_search .5s paused"; debounce = false;}, 750);
}

function close_adv_search(event) {
    if (event.target.className.includes("close_adv_search") == true && debounce == false) {
        debounce = true;

        adv_search_screen.style.opacity = "0";
        adv_search_screen.style.animationPlayState = "running";
        setTimeout(function() {adv_search_screen.style.display = "none"; adv_search_screen.style.animation = "open_adv_search .5s"; debounce = false;}, 750);
    }
}

function previous_ads() {
    if (ads_trans_percen < 15) {
        ads_trans_percen += 70
        advertisement.getElementsByClassName("ads_banners")[0].style.transform = "translateX(" + ads_trans_percen + "%)";
    }
}

function next_ads() {
    ads_trans_percen -= 70
    advertisement.getElementsByClassName("ads_banners")[0].style.transform = "translateX(" + ads_trans_percen + "%)";
}