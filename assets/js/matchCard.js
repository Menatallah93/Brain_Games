
//putting pics in divs
var imgs = ['pic9a.png', 'pic1a.png', 'pic7a.png',
    'pic2a.png', 'pic14.png', 'pic3a.png', 'pic9a.png', 'pic1a.png', 'pic7a.png',
    'pic2a.png', 'pic14.png', 'pic3a.png'];

var rightSound = new Audio("assets/media/matchCard/righ.wav");
var wrongSound = new Audio("assets/media/matchCard/wrong.wav");
var main = document.getElementById("main");
var allDiv = document.getElementsByClassName("pics");
var correctCount = 0;
var counter = document.getElementById("score");


function drawImage() {

    var len = imgs.length;
    for (var i = 0; i < len; i++) {
        var random = Math.floor(Math.random() * imgs.length);
        main.innerHTML += '<div class="pics"><img src="assets/images/matchCard/' + imgs[random] + '"></div>';
        imgs.splice(random, 1);



    }
}
drawImage();



//pics two phots onlyy
var flag = true;
var arr = []

for (var i = 0; i < allDiv.length; i++) {
    
    allDiv[i].addEventListener("click", function () {

        if (flag) {

            if (arr.length == 0) {
                if (this.firstChild.style.opacity == 0) {

                    this.firstChild.style.opacity = '1';
                    arr[0] = this
                }
            }


            else if (arr.length == 1) {
                if (this.firstChild.style.opacity == 0) {
                    this.firstChild.style.opacity = 1
                    arr[1] = this;
                }



            }

            if (arr.length == 2) {
                flag = false;
                setTimeout(checkimg, 300)
            }
        } else {
            return;
        }
    })

    function checkimg() {
        if (arr[0].firstChild.getAttribute("src") == arr[1].firstChild.getAttribute("src")) {
            rightSound.play();
            correctCount++;
            counter.innerHTML = "score:" + " " + correctCount;

            if (correctCount == 6) {

                alert(" congrats 🎉🎉\n your Score: "+ correctCount
                +"\n"+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+"Lets Srart New Game"+" ");
                clearInterval(time);
                location.reload();
                drawImage();

            }
        } else {
            arr[0].firstChild.style.opacity = 0;
            arr[1].firstChild.style.opacity = 0;
            wrongSound.play();
        }

        arr = [];
        flag = true;
    }
}
var countdown = 60;

function timer() {

    document.getElementById("time").innerHTML = countdown;
    countdown--;
    if (countdown == -2) {

        alert("Game Over. Score: " + correctCount);
        clearInterval(time);
        location.reload();
        drawImage();

    }

}

var time = setInterval(timer, 1000);

function start() {
    location.reload();
    drawImage();

}


