const $levels = { "easy": 3, "medium": 5, "hard": 7 }
const $imgWidth = 100
const $imgHeight = 80
const $imgsTheme = { "default": "buraco.gif", "active": "toupeira.gif", "dead": "morreu.gif" }
$(document).ready(function() {
        fillboard();
        $("#btnPlay").click(function() {
            setInterval(startGame, 1180);
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
    for ($i = 0; $i < Math.pow($level, 2); $i++) {
        $div = $("<div></div>"); //.attr("id", `mole_${$i+1}`);
        $img = $("<img>").attr({ "src": `img/${$imgsTheme.default}`, "id": `mole_${$i+1}` });
        $($img).click(function() { updateScore(this) });
        $($div).append($img);
        $("#board").append($div);
    }
}

function updateScore($img) {
    if ($($img).attr("src").search("toupeira") != -1) {
        $("#score").text(parseInt($("#score").text()) + 1);
        $($img).attr({ "src": `img/${$imgsTheme.dead}` })
    }
}

function startGame() {
    fillboard()
    $level = getLevel()
        // $level = $levels[$("#level").val()]
    $randNumber = getRandNumber(1, Math.pow($level, 2))
    $(`#mole_${$randNumber}`).attr("src", `img/${$imgsTheme.active}`)
}

function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

function getLevel() {
    return $levels[$("#level").val()]
}