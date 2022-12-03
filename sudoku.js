var numSelected = null;
var tileSelected = null;
let time;
var Conestlives_Remaining = 10
var lives_Remaining = Conestlives_Remaining;
const Easy = [
    "6------7-",
    "-----5-2-",
    "-----1---",
    "362----81",
    "--96-----",
    "71--9-4-5",
    "-2---651-",
    "--78----3",
    "45-------"
];
const solEasy = [
    "685329174",
    "971485326",
    "234761859",
    "362574981",
    "549618732",
    "718293465",
    "823946517",
    "197852643",
    "456137298",
];

const Medium = [
    "--9------",
    "-4----6-7",
    "58-31----",
    "15--4-36-",
    "------4-8",
    "----9----",
    "---75----",
    "3-------1",
    "--2--3---"
];
const solMedium = [
    "619472583",
    "243985617",
    "587316924",
    "158247369",
    "926531478",
    "734698152",
    "891754236",
    "365829741",
    "472163895",
];

const Hard = [
    "-1-5-----",
    "--97-42--",
    "--5----7-",
    "5---3---7",
    "-6--2-41-",
    "--8--5---",
    "1-4------",
    "2-3-----9",
    "-7----8--"
];
const solHard = [
    "712583694",
    "639714258",
    "845269173",
    "521436987",
    "367928415",
    "498175326",
    "184697532",
    "253841769",
    "976352841",
];

window.onload = function () {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("span");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    // Board 9x9
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + col.toString();

            if (row == 2 || row == 5) {
                tile.classList.add("horizontal-line");
            }
            if (col == 2 || col == 5) {
                tile.classList.add("vertical-line");
            }
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

function startGame() {
    clearPreviousBoard()
    if (((document.getElementById("easy").checked == true) && (document.getElementById("3-min").checked == true))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Easy[row][col] != "-") {
                    tile.innerText = Easy[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileEasy);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_3 = 3;
        var convertMinToSec_3 = startingMinutes_3 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_3 / 60);
            var newSec = convertMinToSec_3 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_3--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;

                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);
    }



    else if (((document.getElementById("easy").checked == true) && (document.getElementById("5-min").checked == true))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Easy[row][col] != "-") {
                    tile.innerText = Easy[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileEasy);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_5 = 5;
        var convertMinToSec_5 = startingMinutes_5 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_5 / 60);
            var newSec = convertMinToSec_5 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_5--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;

                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);


    }

    else if (((document.getElementById("easy").checked == true) && (document.getElementById("10-min").checked == true))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Easy[row][col] != "-") {
                    tile.innerText = Easy[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileEasy);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_10 = 10;
        var convertMinToSec_10 = startingMinutes_10 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_10 / 60);
            var newSec = convertMinToSec_10 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_10--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;
                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);


    }

    else if ((((document.getElementById("medium").checked == true) && (document.getElementById("3-min").checked == true)))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Medium[row][col] != "-") {
                    tile.innerText = Medium[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileMedium);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_3 = 3;
        var convertMinToSec_3 = startingMinutes_3 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_3 / 60);
            var newSec = convertMinToSec_3 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_3--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;
                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);

    }

    else if ((((document.getElementById("medium").checked == true) && (document.getElementById("5-min").checked == true)))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Medium[row][col] != "-") {
                    tile.innerText = Medium[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileMedium);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_5 = 5;
        var convertMinToSec_5 = startingMinutes_5 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_5 / 60);
            var newSec = convertMinToSec_5 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_5--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;
                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);

    }

    else if ((((document.getElementById("medium").checked == true) && (document.getElementById("10-min").checked == true)))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Medium[row][col] != "-") {
                    tile.innerText = Medium[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileMedium);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_10 = 10;
        var convertMinToSec_10 = startingMinutes_10 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_10 / 60);
            var newSec = convertMinToSec_10 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_10--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;
                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);

    }

    else if ((((document.getElementById("hard").checked == true) && (document.getElementById("3-min").checked == true)))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Hard[row][col] != "-") {
                    tile.innerText = Hard[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileHard);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_3 = 3;
        var convertMinToSec_3 = startingMinutes_3 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_3 / 60);
            var newSec = convertMinToSec_3 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_3--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;
                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);
    }

    else if ((((document.getElementById("hard").checked == true) && (document.getElementById("5-min").checked == true)))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Hard[row][col] != "-") {
                    tile.innerText = Hard[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileHard);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_5 = 5;
        var convertMinToSec_5 = startingMinutes_5 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_5 / 60);
            var newSec = convertMinToSec_5 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time); 
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_5--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;
                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);
    }

    else if ((((document.getElementById("hard").checked == true) && (document.getElementById("10-min").checked == true)))) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row.toString() + "-" + col.toString();

                if (Hard[row][col] != "-") {
                    tile.innerText = Hard[row][col];

                }
                if (row == 2 || row == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col == 2 || col == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTileHard);
                tile.classList.add("tile");
                document.getElementById("board").appendChild(tile);
            }
        }
        document.getElementById("timer").classList.remove("timeHidden");
        var startingMinutes_10 = 10;
        var convertMinToSec_10 = startingMinutes_10 * 60;
        time = setInterval(() => {
            var newMin = Math.floor(convertMinToSec_10 / 60);
            var newSec = convertMinToSec_10 % 60;
            if (newMin == 0 && newSec == 0) {
                document.getElementById("time_audio").play();
                alert("You Lost The Game :(");
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                convertMinToSec_10--;
                if (newSec == 0) {
                    newMin--;
                    newSec = 60;
                }
                if (newMin.toLocaleString().length == 1) {
                    newMin = "0" + newMin;
                }
                if (newSec.toLocaleString().length == 1) {
                    newSec = "0" + newSec;
                }

                document.getElementById("timer").innerText = `${newMin}:${newSec}`;
            }

        }, 1000);
    }
}


function clearPreviousBoard() {   //remove each tile
    var tiles = document.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].remove();
    }

    //remove timer
    clearTimeout(time);

    //deselect any number
    for (let i = 0; i < document.getElementById("digits").children.length; i++) {
        document.getElementById("digits").children[i].classList.remove("number-selected");
    }

    //clear selected variables
    tileSelected = null;
    numSelected = null;
}


function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
function clearNumbers() {
    var numbers = document.querySelectorAll(".number");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].remove();
    }
}

function selectTileEasy() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let row = parseInt(coords[0]);
        let col = parseInt(coords[1]);
        
        let counterWin=0;
        if (solEasy[row][col] == numSelected.id) {
            this.innerText = numSelected.id;
            lives_Remaining +=1;
            document.getElementById("win").play();
            if(counterWin==55)
            {
                alert("You Win The Game :) ");
            }
        }
        else {
            document.getElementById("lose").play();
            if (lives_Remaining == 0) {
                alert("You Lost The Game :(");
                document.getElementById("lives_audio").play();
                lives_Remaining = Conestlives_Remaining;
                
                clearPreviousBoard();
                clearNumbers();
                setGame();
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                lives_Remaining -= 1;
            }
            document.getElementById("livesRemaining").innerText = lives_Remaining;
        }
    }
    document.getElementById("livesRemaining").innerText = lives_Remaining;
}
function selectTileMedium() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let row = parseInt(coords[0]);
        let col = parseInt(coords[1]);
        
        let counterWin=0;
        if (solMedium[row][col] == numSelected.id) {
            this.innerText = numSelected.id;
            lives_Remaining +=1;
            document.getElementById("win").play();
            if(counterWin==57)
            {
                alert("You Win The Game :) ");
            }
        }
        else {
            document.getElementById("lose").play();
            if (lives_Remaining == 0) {
                alert("You Lost The Game :(");
                document.getElementById("lives_audio").play();
                lives_Remaining = Conestlives_Remaining;
                clearPreviousBoard();
                clearNumbers();
                setGame();
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                lives_Remaining -= 1;
            }
            document.getElementById("livesRemaining").innerText = lives_Remaining;
        }
    }
    document.getElementById("livesRemaining").innerText = lives_Remaining;
}
function selectTileHard() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let row = parseInt(coords[0]);
        let col = parseInt(coords[1]);
        
        let counterWin=0;
        if (solHard[row][col] == numSelected.id) {
            this.innerText = numSelected.id;
            lives_Remaining +=1;
            document.getElementById("win").play();
            if(counterWin==57)
            {
                alert("You Win The Game :) ")
            }
        }
        else {
            document.getElementById("lose").play();
            if (lives_Remaining == 0) {
                alert("You Lost The Game :(");
                document.getElementById("lives_audio").play();
                lives_Remaining = Conestlives_Remaining;
                clearPreviousBoard();
                clearNumbers();
                setGame();
                clearInterval(time);
                document.getElementById("timer").classList.add("timeHidden");
            }
            else {
                lives_Remaining -= 1;
            }
            document.getElementById("livesRemaining").innerText = lives_Remaining;
        }
    }
    document.getElementById("livesRemaining").innerText = lives_Remaining;
}
function newGame() {
    clearPreviousBoard();
    clearNumbers();
    clearInterval(time);
    document.getElementById("timer").classList.add("timeHidden");
    document.getElementById("livesRemaining").innerText=Conestlives_Remaining;
    setGame();
}

function answerGame() {
    document.getElementById("timer").classList.add("timeHidden");
    if (((((document.getElementById("easy").checked == true) && (document.getElementById("3-min").checked == true))) || (((document.getElementById("easy").checked == true) && (document.getElementById("5-min").checked == true))) || (((document.getElementById("easy").checked == true) && (document.getElementById("10-min").checked == true))))) {
        var tiles = document.querySelectorAll(".tile");
        var tiless = 0;
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                tiles[tiless].innerText = solEasy[row][col];
                tiless++;
            }
        }
    }
    else if ((((document.getElementById("medium").checked == true) && (document.getElementById("3-min").checked == true))) || (((document.getElementById("medium").checked == true) && (document.getElementById("5-min").checked == true))) || (((document.getElementById("medium").checked == true) && (document.getElementById("10-min").checked == true)))) {
        var tiles = document.querySelectorAll(".tile");
        var tiless = 0;
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                tiles[tiless].innerText = solMedium[row][col];
                tiless++;
            }
        }
        
    }
    else if ((((document.getElementById("hard").checked == true) && (document.getElementById("3-min").checked == true))) || (((document.getElementById("hard").checked == true) && (document.getElementById("5-min").checked == true))) || (((document.getElementById("hard").checked == true) && (document.getElementById("10-min").checked == true)))) {
        var tiles = document.querySelectorAll(".tile");
        var tiless = 0;
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                tiles[tiless].innerText = solHard[row][col];
                tiless++;
            }
        }
    }
}


