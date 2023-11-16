const button = document.querySelectorAll(".button");
const body = document.getElementById("container");

button.forEach(function (button) {
    button.addEventListener("click", (e) => {
        if (e.target.id === "green") {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white") {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "brown") {
            document.body.style.backgroundColor = e.target.id;
        }
    })
});