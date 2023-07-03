const navbar = document.querySelector(".navbar");
const menu_btn = document.getElementById("menu-btn");

menu_btn.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
    cart_items_container.classList.remove("active");
    search_form.classList.remove("active");
});

const cart_items_container = document.querySelector(".cart-items-container");
const cart_btn = document.getElementById("cart-btn");

cart_btn.addEventListener("click", (e) => {
    cart_items_container.classList.toggle("active");
    navbar.classList.remove("active");
    search_form.classList.remove("active");
});

const search_form = document.querySelector(".search-form");
const search_btn = document.getElementById("search-btn");

search_btn.addEventListener("click", (e) => {
    search_form.classList.toggle("active");
    navbar.classList.remove("active");
    cart_items_container.classList.remove("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
    cart_items_container.classList.remove("active");
    search_form.classList.remove("active");
};

/*esto lo puse yo*/
const input_seach = document.querySelector("#search-box");
const label_search = document.querySelector("#lbl-search-box");
document.addEventListener("click", (event) => {
    const focus = event.target;
    if (
        focus != search_btn &&
        focus != search_form &&
        focus != input_seach &&
        focus != label_search
    ) {
        if (search_form.classList.contains("active")) {
            search_form.classList.remove("active");
        }
    }
});
