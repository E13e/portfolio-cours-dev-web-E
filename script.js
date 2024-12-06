document.addEventListener("DOMContentLoaded", () => {
    const couche0 = document.querySelector(".couche_0");
    const couche1 = document.querySelector(".couche_1");
    const couche2 = document.querySelector(".couche_2");
    const button = document.querySelector("#cv");

    button.forEach((button) => {
        button.addEventListener("click", () => {

            couche0.classList.remove("active");
            couche1.classList.remove("active");
            couche2.classList.remove("active");

            if (button.id === "#cv") {
            couche0.classList.add("active");
            }
        });
    });
});