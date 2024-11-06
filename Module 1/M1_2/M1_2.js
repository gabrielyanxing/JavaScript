window.onload = function() {
    const name = prompt("What is your name?");
    document.getElementById("greeting").innerHTML = `Hello, ${name}!`;
};