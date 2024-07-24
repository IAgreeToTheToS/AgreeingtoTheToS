let element = {
    "checkbox": document.getElementById("agree-checkbox").checked,
    "button": document.getElementById("agree-btn"),
    "banner": document.getElementById("banner")
};
function checkForClose() {
    if (element.checkbox) {
        element.button.addEventListener("click", function () {
            element.banner.remove();
            clearInterval(checkForCloseInterval);
        });
    }
}
let checkForCloseInterval = setInterval(checkForClose, 100);