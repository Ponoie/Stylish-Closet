let popup_screen = document.getElementsByClassName("popup_screen")[0];
let theme = document.getElementsByClassName("theme")[0];

let debounce = false;

function popup(event) {
    if (debounce == true) {
        return
    }

    debounce = true;

    popup_screen.style.opacity = 1;
    popup_screen.style.animation = "popup_screen_anim .5s";
    popup_screen.getElementsByClassName("popup_content")[0].style.animation = "popup_content_anim .5s";
    popup_screen.style.display = "flex";
    
    if (event.target.parentElement.tagName == "UL") {
        popup_screen.getElementsByTagName("img")[0].src = event.target.getElementsByTagName("img")[0].src;
        popup_screen.getElementsByTagName("p")[0].innerHTML = event.target.getElementsByTagName("p")[0].innerHTML;
    }
    else if (event.target.parentElement.tagName == "LI") {
        popup_screen.getElementsByTagName("img")[0].src = event.target.parentElement.getElementsByTagName("img")[0].src;
        popup_screen.getElementsByTagName("p")[0].innerHTML = event.target.parentElement.getElementsByTagName("p")[0].innerHTML;
    }
    else {
        popup_screen.getElementsByTagName("img")[0].src = event.target.parentElement.parentElement.getElementsByTagName("img")[0].src;
        popup_screen.getElementsByTagName("p")[0].innerHTML = event.target.parentElement.getElementsByTagName("p")[0].innerHTML;
    }
}

function close_popup(event) {
    if (event.target.className.includes("close_popup") == true && debounce == true) {
        debounce = false;
        
        popup_screen.style.animation = "close_popup_screen_anim .5s";
        popup_screen.getElementsByClassName("popup_content")[0].style.animation = "close_popup_content_anim .5s";
        popup_screen.style.opacity = 0;
        setTimeout(function() {popup_screen.style.display = "none";}, 500);
    }
}

function theme_change() {
    // dark
    if (theme.innerHTML.includes("Dark") == true) {
        theme.innerHTML = '<img src="./scr/images/sun_icon.png">' + "Light";
        document.getElementsByClassName("topbar")[0].style.color = "#ffffff";
        document.body.style.background = "linear-gradient(180deg, #2f2f2f 0%, #1f1f1f 100%)";
        document.getElementsByClassName("logo")[0].getElementsByTagName("img")[0].src = "./scr/images/stylish_closet_logo_white.png";
        document.getElementsByClassName("categories")[0].style.color = "#2f2f2f";
        document.getElementsByClassName("heading")[0].style.color = "#ffffff";
        document.getElementsByClassName("heading")[0].getElementsByTagName("div")[0].style.backgroundColor = "#ffffff";
        document.getElementsByClassName("content")[0].style.backgroundColor = "#1f1f1f";
        document.getElementsByClassName("bottom_bar")[0].style.backgroundColor = "#1f1f1f";
        document.getElementsByClassName("searchbar")[0].getElementsByTagName("button")[0].style.backgroundColor = "#2f2f2f";

        document.querySelectorAll(".categories li").forEach(category => {
            category.style.backgroundColor = "#ffffff";
        });

        document.querySelectorAll(".container .content li").forEach(content => {
            content.style.backgroundColor = "#2f2f2f";
            content.style.color = "#ffffff"
        });
    }
    // light
    else {
        theme.innerHTML = '<img src="./scr/images/moon_icon.png">' + "Dark";
        document.getElementsByClassName("topbar")[0].style.color = "#1f1f1f";
        document.body.style.background = "linear-gradient(180deg, #ffffff 0%, #dee2e1 100%)";
        document.getElementsByClassName("logo")[0].getElementsByTagName("img")[0].src = "./scr/images/stylish_closet_logo.png";
        document.getElementsByClassName("categories")[0].style.color = "#ffffff";
        document.getElementsByClassName("heading")[0].style.color = "#2f2f2f";
        document.getElementsByClassName("heading")[0].getElementsByTagName("div")[0].style.backgroundColor = "#2f2f2f";
        document.getElementsByClassName("content")[0].style.backgroundColor = "#ffffff";
        document.getElementsByClassName("bottom_bar")[0].style.backgroundColor = "#ffffff";
        document.getElementsByClassName("searchbar")[0].getElementsByTagName("button")[0].style.backgroundColor = "#4a4a4a";

        document.querySelectorAll(".categories li").forEach(category => {
            category.style.backgroundColor = "#2f2f2f";
        });

        document.querySelectorAll(".container .content li").forEach(content => {
            content.style.backgroundColor = "#ffffff";
            content.style.color = "#2f2f2f"
        });
    }
}