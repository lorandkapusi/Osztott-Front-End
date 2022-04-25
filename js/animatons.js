const container = document.querySelector(".container-fluid");

var anchors = document.querySelectorAll('a');

for (var i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', waitBeforeNavigate, false);
}

function waitBeforeNavigate(ev) {
    ev.preventDefault();                    
    const goTo = this.getAttribute("href"); 
  
    container.classList.remove("loadIn");
    container.classList.add("loadOut");
    document.body.style = " opacity: 0; animation: LoadOutFade 1.5s"
    setTimeout(function(){

      window.location = goTo;

    }, 1500);                            
  }; 


  