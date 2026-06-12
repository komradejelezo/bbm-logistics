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

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

const letterImages = document.querySelectorAll(".letter-card img");
const certificateImages = document.querySelectorAll(".certificate-real-card img");

let currentGallery = [];
let currentImage = 0;

function showImage(index) {

    lightboxImage.src = currentGallery[index].src;

}

function openGallery(images, index) {

    currentGallery = images;

    currentImage = index;

    showImage(currentImage);

    lightbox.classList.add("active");

}

letterImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        openGallery(letterImages, index);

    });

});

certificateImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        openGallery(certificateImages, index);

    });

});

lightboxClose.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightboxPrev.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
        currentImage = currentGallery.length - 1;
    }

    showImage(currentImage);

});

lightboxNext.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= currentGallery.length) {
        currentImage = 0;
    }

    showImage(currentImage);

});

function sendToWhatsApp(event) {

    event.preventDefault();

    const inputs = document.querySelectorAll(".cta-form input");

    const name = inputs[0].value;
    const phone = inputs[1].value;
    

    const message =
`Новая заявка с сайта BBM Logistics

Имя: ${name}
Телефон: ${phone}
`;

    const url =
`https://wa.me/77018000710?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}
