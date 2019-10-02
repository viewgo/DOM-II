var bodyElement = document.querySelector("body");

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var delay = 0;

function rave(raveBG) {
    if (raveBG === true) {
        delay++;

        if (delay > 3) {
            bodyElement.style.backgroundColor = getRandomColor();
            delay = 0;
        }

        requestAnimationFrame(rave);
    }
}

function getRandomColor() {
    // creating a random number between 0 and 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // going from decimal to hex
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }

    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }

    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }

    // creating the hex value by concatenatening the string values
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}

const images = document.querySelectorAll("img");

//1
images.forEach(i => {
    i.addEventListener("mouseover", e => {
        i.style.transform = "scale(1.1)";
        i.style.transition = "all 0.3s";
    });
});
//2
images.forEach(i => {
    i.addEventListener("mouseleave", e => {
        i.style.transform = "scale(1.0)";
        i.style.transition = "all 0.3s";
    });
});

const button = document.querySelectorAll(".btn");

button.forEach(i => {
    //3
    i.addEventListener("dblclick", doubleClick);
    //4
    i.addEventListener("click", singleClick);
});
function doubleClick(e) {
    e.target.textContent = "DOUBLE CLICK MASTER";
}
function singleClick(e) {
    e.target.textContent = "Sign Me Up!";
}

const topImage = images[0];
//5
topImage.addEventListener("drag", dragScript);
//6
topImage.addEventListener("dragend", dropScript);
const audio = new Audio("vengabus.mp3");
audio.volume = 0.05;

function dragScript(e) {
    e.target.style.transform = "scale(.6)";
    images.forEach(i => {
        i.className = "shakeImage";
    });
    button.forEach(i => {
        i.className = "shakeImage btn";
    });
    audio.play();
    rave(true);
}
function dropScript(e) {
    e.target.style.transform = "scale(1)";
    rave(false);
    document.body.style.background = "white";
}

const myh1 = document.querySelector("h1");
//7
document.addEventListener("keydown", keydownScript);
//8
document.addEventListener("keyup", keyupScript);

function keydownScript(e) {
    myh1.textContent = "KEY IS DOWN";
}
function keyupScript(e) {
    myh1.textContent = "FUN BUS IS LIT";
}

//9
window.addEventListener("resize", resizeScript);
function resizeScript(e) {
    document.body.style.background = "#dddddd";
}

//10
window.addEventListener("scroll", scrollScript);
function scrollScript(e) {
    console.log("hello");
    document.body.style.background = "#dddddd";
}



let navLinks = document.querySelectorAll("nav a");
console.log(navLinks);

navLinks.forEach(i => {    
    i.addEventListener("click", (e) => {
        e.preventDefault();
    });
});



const contentGroup = document.querySelector(".home");
contentGroup.addEventListener('click', (event) => {
  contentGroup.style.backgroundColor="rebeccapurple";
});

const card = document.querySelector(".text-content");
console.log(card);
card.addEventListener('click', (event) => {
  card.style.backgroundColor="hotpink";
  event.stopPropagation();
})


TweenMax.to("img", 0, {rotation:180});
TweenMax.to("img", 1, {rotation:360});

