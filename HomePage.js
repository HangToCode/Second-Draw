
//code for looping over image 
const panels = document.querySelectorAll(".panel");

let currPanel = 0;

function activatePanel() {

  panels.forEach(panel => {
    panel.classList.remove("active"); 
  });

  panels[currPanel].classList.add("active");
  
  currPanel++;
  if(currPanel >= panels.length) {
    currPanel = 0;
  }

}

setInterval(activatePanel, 1000);