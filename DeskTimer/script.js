document.addEventListener('DOMContentLoaded', function() {

  
  let wTime = document.querySelector('#wTime');
  let wButton = document.querySelector('#wButton');

  wButton.disabled = true;
  
  wButton.onclick = function() {
    let newString = wTime.value;

    let indexOfColon = newString.indexOf(':');
    let mins = newString.substring(0,indexOfColon);
    let secs = newString.substring(indexOfColon+1);
    let total = parseInt(mins) * 60 + parseInt(secs);

    console.log("mins: " + mins);
    console.log("secs: " + secs);
    console.log(setTimer(total));

    document.querySelector("#wTimer").innerHTML = newString;
    wTime.value = ' ';

    let start = setInterval(function() {
      var timeLeft = countDownDate - new Date().getTime();
  
      minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      if (timeLeft > 0) {
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        document.querySelector("#wTimer").innerHTML = minutes + ":" + seconds;
        
      } else {
        document.querySelector("#wTimer").innerHTML = "Time is up!";
        clearInterval(start);
      }
    }, 1000)
    
    return false;
  }

  wTime.onkeyup = function(){
    if (wTime.value.length > 0) {
      wButton.disabled = false;
    }
  }

function setTimer(countDown) {    
  return countDownDate = new Date().getTime() + countDown * 1000;
}
});