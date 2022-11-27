function age() {

    document.getElementById("ageid").innerText = new Date().getFullYear() - 2003;
}

window.onload = function() {
    age();
}