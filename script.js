const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(button => {
    button.addEventListener("click", () => {

        langButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });
});

const translatableElements = document.querySelectorAll("[data-ru]");

const translatableInputs = document.querySelectorAll("[data-ru-placeholder]");

langButtons.forEach(button => {

    button.addEventListener("click", () => {

    const lang = button.dataset.lang;

    translatableElements.forEach(element => {
        element.textContent = element.dataset[lang];
    });

    translatableInputs.forEach(input => {
        input.placeholder = input.dataset[`${lang}Placeholder`];
    });

});
});