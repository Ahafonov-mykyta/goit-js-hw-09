import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
    startBtn: document.querySelector("button[data-start]"),
    days:  document.querySelector(".value[data-days]"),
    hours:  document.querySelector(".value[data-hours]"),
    minutes:  document.querySelector(".value[data-minutes]"),
    seconds:  document.querySelector(".value[data-seconds]"),
}
let choosedDate ;



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] <= options.defaultDate){
        refs.startBtn.setAttribute("disabled",1)
       return Notiflix.Notify.failure("Please choose a date in the future")
       
      }
      refs.startBtn.removeAttribute("disabled",1)
      choosedDate = selectedDates[0];
      return choosedDate;
    },
  };

const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);  // flatpickr


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day),4);
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  

  
function start () {
    const timerInterval = setInterval (()=>{
        const dateNow = new Date();
        const timeLeft = choosedDate - dateNow;
        const {days, hours, minutes, seconds} = convertMs(timeLeft);
        updateInterface(days, hours, minutes, seconds);
        refs.startBtn.setAttribute("disabled",1)

        if( timeLeft < 1){
            clearInterval(timerInterval)
            Notiflix.Notify.success("Разпродажа окончена.")
            updateInterface("00","00","00","00")
        }
        
        
  },1000)
 
  }

  refs.startBtn.setAttribute("disabled",1)
  refs.startBtn.addEventListener("click",start)


  function updateInterface (days, hours, minutes, seconds) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;

  }

  function pad (value){
    return String(value).padStart(2,"0")
  }