function calcular() {
    var nivel = document.getElementById("nivel").value;
    var modificadorHaste = 1.0;
    const rbs = document.getElementsByName("hasteModifier");
    for (const rb of rbs) {
        if (rb.checked) {
            modificadorHaste = parseFloat(rb.value);
            break;
        }
    }
    var speedAdicional = 0;
    const speeds = document.getElementsByClassName("speedAdicional");
    for (const speed of speeds) {
        if (speed.checked) {
            speedAdicional += parseInt(speed.value);
            if (speed.classList.contains("food")) {
                modificadorHaste = 1.0
            }
        }
    }
    var resultadoSpeed = (69 + parseInt(nivel)) * parseFloat(modificadorHaste) + 40 + parseInt(speedAdicional);
    resultadoSpeed = resultadoSpeed.toFixed();
    var nextBreakpoint = 0;
    var breakpoint;
    // var friction = [70];
    //var breakpointsSpeeds = {
    var	tiles = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 142, 200, 342, 1070], // Omruc Maze
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 147, 192, 278, 499, 1842], // Bridges
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 157, 205, 299, 543, 2096], // Oramond Sewer Bridges
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 135, 167, 219, 321, 592, 2382], // Town, Depots, etc.
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 150, 187, 248, 367, 696, 3060], // Roshamuul Surface
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 139, 167, 208, 278, 417, 813, 3913], // Darashia Town
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 140, 168, 211, 281, 423, 826, 4012], // Red Planks
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 146, 175, 219, 293, 444, 876, 4419], // Hive Structures
        [0, 0, 0, 0, 0, 0, 0, 0, 115, 131, 153, 183, 230, 310, 472, 944, 4992], // Dirt Floor (Caves)
        [0, 0, 0, 0, 0, 0, 0, 111, 125, 143, 167, 201, 254, 344, 531, 1092, 6341], // Dark Grass
        [0, 0, 0, 0, 0, 0, 0, 120, 135, 155, 181, 219, 278, 380, 595, 1258, 8036], // Mountain Floor, Deeplings
        [0, 0, 0, 0, 0, 0, 116, 129, 145, 167, 196, 238, 304, 419, 663, 1443, 10167], // Desert Sand, Snow, etc.
        [0, 0, 0, 0, 0, 112, 124, 138, 156, 179, 212, 258, 331, 459, 737, 1652, 12846], // Walkable Water (Swimming)
        [0, 0, 0, 0, 0, 120, 132, 148, 167, 192, 227, 279, 359, 502, 818, 1886, 16212], // Dirt (Below Wheat), Lava
        [0, 0, 0, 114, 124, 135, 149, 167, 190, 219, 261, 322, 419, 597, 998, 2444, 25761], // Shallow Water, Slime, etc.
        [117, 126, 135, 146, 160, 175, 195, 220, 252, 295, 356, 446, 598, 884, 1591, 4557, 81351] // Underwater
    ];
    var tile = document.getElementById("tile").value;
    var tileActivo = tiles[tile];
    for (i = 0; i < tileActivo.length ; i++ ) {
        if (resultadoSpeed < tileActivo[i]) {
            breakpoint = i;
             nextBreakpoint = tileActivo[i];
             lastBreakpoint = tileActivo[i-1];
             break;
        }
    }
    
    var above = resultadoSpeed - lastBreakpoint;
    var missingSpeed = nextBreakpoint - resultadoSpeed;
    console.log(above);
    if (Number.isNaN(above)) {
        above = 0;
    }
    document.getElementById("resultado").innerHTML = "Speed: " + resultadoSpeed;
    //document.getElementById("nextBreakpoint").innerHTML =  "Next breakpoint: " + nextBreakpoint;
    document.getElementById("above").innerHTML = "Points above current breakpoint: " + above;
    document.getElementById("missing").innerHTML = "Points missing for next breakpoint: " + missingSpeed;
    document.getElementById("breakpoint").innerHTML = "Breakpoint: " + breakpoint;
}

function clean(type, selected) {
    const toCleans = document.getElementsByName(type);
    for (const toClean of toCleans) {
        if (toClean.id != selected) {
            toClean.checked = false;
        }
    }
}

function coconut() {
    const coco = document.getElementById("food4");
    const toCleans = document.getElementsByName("helmets");
    if (coco.checked) {
        for (const toClean of toCleans) {
            toClean.checked = false;
        }
    }
}

function helmet() {
    const coco = document.getElementById("food4");
    const helmets = document.getElementsByName("helmets");
    for (const helmet of helmets) {
        if (helmet.checked) {
            coco.checked = false;
        }
    }
}

function terreno() {
    const terreno = document.getElementById("tile");
    const coco = document.getElementById("food4");
    if (terreno.value == 15) {
        coco.disabled = false;
    }
    else {
        coco.checked = false;
        coco.disabled = true;
    }
}

window.onload = function() {
    calcular();
}
