function age() {

    let date1 = new Date();


    let annee = date1.getFullYear();

    let monage = annee - 2003

    $('#ageid span').html(`${monage}`);
    console.log('HTML prêt !');
}

window.onload = function() {
    age();
}