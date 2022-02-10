document.getElementById("header-container").style.backgroundColor="green"

document.getElementById("footer-container").style.backgroundColor="green"

let corDeFundoNaoUrgente = document.querySelectorAll(".no-emergency-tasks")
    for (let index = 0; index < corDeFundoNaoUrgente.length; index++) {
    corDeFundoNaoUrgente[index].style.backgroundColor="#F5DEB3"
    
}

let corDeFundoUrgente = document.querySelectorAll(".emergency-tasks")
    for (let index = 0; index < corDeFundoUrgente.length; index++) {
        corDeFundoUrgente[index].style.backgroundColor="#8A2BE2"
        
    }

let corDeFundoUrgenteh3 = document.querySelectorAll(".emergency-tasks h3")
    for (let index = 0; index < corDeFundoUrgenteh3.length; index++) {
        corDeFundoUrgenteh3[index].style.backgroundColor="black"
        
    }

let corDeFundoNaoUrgenteh3 = document.querySelectorAll(".no-emergency-tasks h3")
    for (let index = 0; index < corDeFundoNaoUrgenteh3.length; index++) {
    corDeFundoNaoUrgenteh3[index].style.backgroundColor="black"

}