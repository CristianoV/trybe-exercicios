// const paragraph = document.getElementById("paragraph");
// paragraph.style.color = "red";

let paragraph = document.getElementsByClassName("paragraph");
paragraph[1].innerText = "Este é o segundo paragrafo do texto";
paragraph[0].innerText = "Este é o primeiro paragrafo do texto";
paragraph[0].style.color = "red";
paragraph[1].style.color = "blue";
paragraph[0].style.background = "yellow";
document.getElementsByTagName("h4")[0].style.color = "green";
