document.addEventListener('DOMContentLoaded', function() {
  
  let index = document.getElementById("index");
  let waterBreak = document.getElementById("waterBreak");
  waterBreak.style.display = "none";
  
  let wTime = document.querySelector('#wTime');
  let wButton = document.querySelector('#wButton');
  let back = document.querySelector('#back');

  wButton.disabled = true;
  
  wButton.onclick = function() {
    if (countDown("wTime", "wButton")) {

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
        index.style.display = "none";
        waterBreak.style.display = "block";
        clearInterval(start);
      }

      // wButton.onclick = function() {
      //   document.getElementById(buttonID).value = "Continue";
      //   while(true)
      //     {
      //       await new Promise(res => { setTimeout(res, 3600000); });
            
      //     }
      // }
    }, 1000)
    }

    wTime.value = ' ';
    return false;
  }

  wTime.onkeyup = function(){
    if (wTime.value.length > 0) {
      wButton.disabled = false;
    }
  }

  back.onclick = function() {
        index.style.display = "block";
        waterBreak.style.display = "none";
    wTime.disabled = false;
    wButton.value = "Start";
    wTime.value = "00:00";
  }

function setTimer(countDown) {    
  return countDownDate = new Date().getTime() + countDown * 1000;
}

function validTime(t) {
  if(t.length != 5) return false;
  if(t[2] != ':') return false;
  for(i = 0; i < 5; i++)
    {
      if(i == 2) continue;
      if(t[i] < '0' || t[i] > '9') return false;
    }
  return true;
}

function countDown(textID, buttonID) {
  if(!validTime(document.getElementById(textID).value))
  {
    document.getElementById("note").innerHTML = "Invalid time. Please input     XX:XX, where X is a digit 0-9";
    return false;
  }
  document.getElementById(buttonID).value = "Pause";
  document.getElementById(textID).disabled = true;
  let newString = wTime.value;
  
  let indexOfColon = newString.indexOf(':');
  let mins = newString.substring(0,indexOfColon);
  let secs = newString.substring(indexOfColon+1);
  let total = parseInt(mins) * 60 + parseInt(secs);
    
  setTimer(total)

  return true;
}
});