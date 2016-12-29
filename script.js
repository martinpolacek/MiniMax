$(document).ready(function () {
    $("#click").click(spocitej);
})

function spocitej() {
    var cisla = $("#cisla").val().split(",").map(Number);
    var pole = cisla;
    var min = Math.min.apply(null, cisla);
    var max = Math.max.apply(null, cisla);
    console.log(cisla);
    console.log(pole);
$("#vypis").text("Nejmenší číslo je " + min + " a největší číslo je " + max + ".")
}