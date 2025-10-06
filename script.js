document.getElementById("submit").addEventListener("click", function() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const id = document.getElementById("id").value.trim();

    if (!name || !email || !number || !id) {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("id", id);

    const button = this;
    button.style.transform = "scale(1.2) rotate(10deg)";
    button.style.opacity = "0.8";
    button.style.transition = "transform 0.25s ease, opacity 0.25s ease";

    setTimeout(() => {
        button.style.transform = "scale(1)";
        button.style.opacity = "1";
    }, 250);

    setTimeout(() => {
        window.location.href = "result.html";
    }, 500);
});