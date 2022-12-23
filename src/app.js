const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

let words = ['Fullstack', 'Frontend', 'Freelance'];

let part;
let i = 0;
let offset = 0;
let len = words.length;
let forwards = true;
let skip_count = 0;
let skip_delay = 15;
let speed = 150;
function wordflick() {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count === skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substring(0, offset);
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});
