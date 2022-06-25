var wTime = change("rTime");

var waterTimer = new Timer("water", wTime);
if (waterTimer.onGoing) {
  document.getElementById("wButton").onclick = setInterval(waterTimer.start(),1000);
} else {
  document.getElementById("wButton").value = "stop";
}


function change(name) {
  document.querySelector('input').addEventListener('change', function() {
          var time = document.getElementById(name).value;
          var mins = time.substring(0,2);
          var secs = time.substring(3, 5);
          var total = parseInt(mins) * 60 + parseInt(secs);

          console.log("mins: " + mins);
          console.log("secs: " + secs);
          console.log(total);
          return setTimer(total);
        })
}


function Timer(name, countDownDate) {
  this.name = name;
  this.countDownDate = countDownDate;
  this.minutes = 0;
  this.seconds = 0;
  this.onGoing = false;
  this.start = function() {
    var timeLeft = countDownDate - new Date().getTime();

    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft > 0) {
      document.getElementById("rTime").innerHTML = minutes + ":" + seconds;
      onGoing = true;
    } else {
      document.getElementById("rTime").innerHTML = "Times up!";
      onGoing = false;
    }
  }
  this.getMinutes = function() {
    return minutes;
  }
  this.getSeconds = function() {
    return seconds;
  }
}



function setTimer(countDown) {    
  return countDownDate = new Date().getTime() + countDown * 1000;
}