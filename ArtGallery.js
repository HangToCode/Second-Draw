const textEl = document.getElementById('textMessage');
const text = 'Welcome to my drawing gallery';
let idx = 0;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx > text.length) {
        //pause loop  for 5 second after full text show
        idx = 0;
        setTimeout(() => {
            writeText(); 
        }, 5000);
        return;
    }

    setTimeout(writeText, 215);
}



//udemy course for button 
const buttons = document.querySelectorAll('.submit-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function (e) {
        const x = e.pageX;
        const y = e.pageY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});


//pass value to another page
