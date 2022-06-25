var countDownDate = 0;
var minutes = 0;
var seconds = 0;

function setTimer(countDown) {    
  countDownDate = new Date().getTime() + countDown * 1000;
}

function countDown() {
  var timeLeft = countDownDate - new Date().getTime();

  minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
}

function getMinutes() {
  return minutes;
}

function getSeconds() {
  return seconds;
}