// WHY DID YOU MAKE THIS SO COMPLICATED. I GIVE UP

let blocks = document.getElementsByClassName("block");
let windowWidth = window.innerWidth;
let boxWidth = blocks[0].clientWidth;
interval = [null, null, null, null, null];
let gravity = 2;
let boost = 3;
let pos = [0, 0, 0, 0, 0];
let posShiftIndex = 0;

document.addEventListener("mouseup", notPressingDown);

Array.from(blocks).forEach(item => {
    item.addEventListener("mousedown", function() {
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i] == item) {
                item.style.order = "0";
            } else {
                blocks[i].style.order = i + 1;
                console.log(blocks[i].style.order);
            }
        }
    });
    item.addEventListener("mousedown", pressingDown);
});

posShiftIndex = 0;

function pressingDown(e) {
    let index = 0;

    for (let i = 0; i < Array.from(blocks).length; i++) {
        if (blocks[i] == e.target) {
            index = i;
        }
    }

    let counter = pos[index];

    interval[index] = setInterval(function() {
        if (pos[index] <= windowWidth - boxWidth * 2) {
            pos[index] += gravity * boost;
            blocks[index].style.transform = `translateX(${pos[index]}px)`;
        }
    }, 10);
}

function notPressingDown(e) {
    for (let i = 0; i < interval.length; i++) {
        clearInterval(interval[i]);
        interval[i] = null;
    }
}

setInterval(function() {
    for (let i = 0; i < Array.from(blocks).length; i++) {
        let counter = pos[i];
        blocks[i].innerHTML = `${pos[i]}`;

        if (pos[i] > 0 && interval[i] === null) {
            pos[i] -= gravity;
            blocks[i].style.transform = `translateX(${pos[i]}px)`;
        }
    }
}, 10);
