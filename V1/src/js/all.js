window.onload = function() {
    
    var an = new Date().getFullYear() - 2003;
    var mois = new Date().getMonth();
    var jour = new Date().getDay();
if(mois < 6){
        an = an - 1
}

    document.getElementById("ageid").innerText = an;

}