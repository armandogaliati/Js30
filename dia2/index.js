const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
  const secondDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hour / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  if (secondDegrees == 90 || minuteDegrees == 90 || hourDegrees == 90) {
    secondHand.style.transition = `none`;
    minHand.style.transition = `none`;
    hourHand.style.transition = `none`;
  } else {
    secondHand.style.transition = `all 0.05s cubic-bezier(0.1, 2.7, 0.6, 1)`;
    minHand.style.transition = `all 0.05s cubic-bezier(0.1, 2.7, 0.6, 1)`;
    hourHand.style.transition = `all 0.05s cubic-bezier(0.1, 2.7, 0.6, 1)`;
  }
}

setInterval(setDate, 1000);
