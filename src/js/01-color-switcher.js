function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
 
const startBtn = document.querySelector("button[data-start]")     
const stopBtn = document.querySelector("button[data-stop]") 
const body =document.querySelector("body")       
stopBtn.setAttribute ("disabled", 1)    
let intervalColorChange = null;


const colorChange= (e) => {
    body.setAttribute("style", `background-color:${getRandomHexColor()}`)
    
}
console.log(stopBtn.hasAttribute ("disabled", 1))
startBtn.addEventListener("click", ()=>{
    intervalColorChange = setInterval(colorChange,1000);
    startBtn.setAttribute("disabled", 1)
    
    stopBtn.removeAttribute ("disabled", 1)
})

stopBtn.addEventListener("click",()=>{
    clearInterval(intervalColorChange);
    startBtn.removeAttribute("disabled", 1)
    stopBtn.setAttribute ("disabled", 1)
   
})
