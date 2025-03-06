document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact_form").addEventListener("submit", function (e) {
        e.preventDefault(); 

        const alertBox = document.getElementById("submitAlert");

        alertBox.classList.add("show");
        alertBox.style.display = "block"; 

        this.reset();

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 5000);
    });
});
