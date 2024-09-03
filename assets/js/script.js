const analogSecond = document.getElementById("second");
const analogMinute = document.getElementById("minute");
const analogHour = document.getElementById("houre");

const digitalSecond = document.getElementById("d__second");
const digitalMinute = document.getElementById("d__minute");
const digitalHour = document.getElementById("d__hour");

const setTime = () => {
  const time = new Date();

  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();

  const secondDegree = second * 6
  const minuteDegree = minute * 6
  

  analogSecond.style.rotate = `${secondDegree}deg`;
  analogMinute.style.rotate = `${minuteDegree}deg`;


  digitalSecond.innerText = String(second).padStart(2, '0')
  digitalMinute.innerText = String(minute)
  digitalHour.innerText = String(hour)
};

setInterval(setTime, 1000);
