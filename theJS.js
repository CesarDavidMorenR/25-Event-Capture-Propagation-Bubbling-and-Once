const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
};

divs.foreach(div => div.addEventListener('click', logText));