document.addEventListener("DOMContentLoaded", () => {

    //Sélection des éléments
    const cartes = document.querySelectorAll("button");
    const score = document.querySelectorAll("header>div");
    
    //fonction pour actualiser les scores
    function actualiseScore(){
      score[0].innerHTML = document.querySelectorAll("main>button:not(.rouge)").length;
      score[1].innerHTML = document.querySelectorAll("main>button.rouge").length;
    }

    //initialisation du score
    actualiseScore();

    // écoute du clic sur chaque carte du jeu
    for(let carte of cartes){
        carte.addEventListener("click", () => {
            //ajout ou supression de la classe "rouge"
            carte.classList.toggle("rouge");
            //actualisation des scores
            actualiseScore();        
        });
    }
});

