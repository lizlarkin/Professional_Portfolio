var aboutButton = document.querySelector("#about-button");
var resumeButton = document.querySelector("#resume-button");
var portfolioButton = document.querySelector("#portfolio-button");
var linksButton = document.querySelector("#links-button");

var aboutEl = document.querySelector("#about-div");
var resumeEl = document.querySelector("#resume-div");
var portfolioEl = document.querySelector("#portfolio-section");
var linksEl = document.querySelector("#links-div");

function reset () {
$("#about-div").hide()
$("#resume-div").hide()
$("#portfolio-section").hide()
$("#links-div").hide()
}
reset ()

aboutButton.addEventListener ("click", function() {
    reset()
    $("#about-div").show()
});

resumeButton.addEventListener ("click", function() {
    reset()
    $("#resume-div").show()
});

portfolioButton.addEventListener ("click", function() {
    reset()
    $("#portfolio-section").show()
});

linksButton.addEventListener ("click", function() {
    reset()
    $("#links-div").show()
});