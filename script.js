document.addEventListener("DOMContentLoaded", () => {
    const couche0 = document.querySelector(".couche_0");
    const couche1 = document.querySelector(".couche_1");
    const couche2 = document.querySelector(".couche_2");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            couche0.classList.add("fullscreen");
            couche1.classList.add("fullscreen");
            couche2.classList.add("fullscreen");
        });
    });
});