const buttonColor=document.querySelector(".button-color");
const body=document.querySelector("body");
const colors=["#cc34eb","#eb34a2","#347deb","#eb7134","#fc0303", "#03c2fcj"];

buttonColor.addEventListener("click", function(){
    const sumColor= Math.floor(Math.random()*colors.length);
    const myColor= colors[sumColor];
    body.style.backgroundColor=myColor
})