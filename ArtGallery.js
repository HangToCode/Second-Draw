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

//pass value to another page
