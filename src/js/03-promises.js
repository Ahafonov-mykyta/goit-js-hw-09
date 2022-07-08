import Notiflix from 'notiflix';

const firstDelay = document.querySelector("input[name=delay]")
const stepDelay = document.querySelector("input[name=step]")
const amountPromises = document.querySelector("input[name=amount]")
const form= document.querySelector(".form")
console.log();




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 
    return new Promise ( (resolve, reject) => {

      setTimeout ( () => {
    
        if (shouldResolve) {
       resolve({ position, delay })
        } else {
       reject({ position, delay })
        }
    
},delay)})
   }



 form.addEventListener ("submit", (event)=>{
    event.preventDefault();
     let delay = Number(firstDelay.value);
     let amount= Number(amountPromises.value);
     let step = Number(stepDelay.value);

  for (let i=1; i<= amount; i+=1){
    if (i>1){
      delay = delay + step;
    }
     createPromise(i,delay).then(({ position, delay }) => {
      Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
     })
     .catch(({ position, delay }) => {
      Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
     });
   }
 })


  

  




