let element = {
    "button": document.getElementById("agree-btn"),
    "banner": document.getElementById("banner")
};
function checkForClose() {
    let checkbox = document.getElementById("agree-checkbox").checked
    if (checkbox) {
        element.button.addEventListener("click", function () {
            element.banner.remove();
            clearInterval(checkForCloseInterval);
        });
    }
}
let checkForCloseInterval = setInterval(checkForClose, 100);
