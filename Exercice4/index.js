const btt = document.getElementById("myButton");
const mess = document.getElementById("message");

mess.style.display = "none";

btt.addEventListener("click", () => {
    mess.style.display = "block";
})