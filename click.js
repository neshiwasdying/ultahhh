document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope");

    envelope.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});
