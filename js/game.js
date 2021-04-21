const $levels = { "easy": 3, "medium": 5, "hard": 7 }
const $imgWidth = 100
const $imgHeight = 80
$(document).ready(function () {
    fillboard();
    $("#btnPlay").click(function () {
       setInterval(startGame(),1180)

    })
})
//cria o tabuleiro(moldura)conforme o nivel
function fillboard() {
    // alert($("#level").val())
    $level = $levels[$("#level").val()]
    $boardWidth = $imgWidth * $level
    $boardHeight = $imgHeight * $level
    $("#board").css({ "width": $boardWidth, "height": $boardHeight })
    placeHolesBoard($level)
}
//insere os buracos
function placeHolesBoard($level) {
    $("#board").empty()
    for ($i=0; $i<Math.pow($level,2); $i++) {
        $div = $("<div></div>");//.attr("id", `mole_${$i+1}`);
        $img = $("<img>").attr({"src":"img/buraco.gif", "id": `mole_${$i+1}`});
        $($div).append($img);
        $("#board").append($div);
    }
}
function startGame(){
    fillboard()
    $level = getLevel()
    // $level = $levels[$("#level").val()]
    $randNumber = getRandNumber(1, Math.pow($level, 2))
    $(`#mole_${$randNumber}`).attr("src", "img/toupeira.gif")
}
function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}
function getLevel(){
    return $levels[$("#level").val()]
}
