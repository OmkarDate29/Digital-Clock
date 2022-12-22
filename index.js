setInterval(() => {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hr = date.getHours();

  let ampm = hr < 12 ? "AM" : "PM";

  hr = hr > 12 ? hr - 12 : hr;

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.getElementById("sec").textContent = sec;
  document.getElementById("min").textContent = min;
  document.getElementById("hr").textContent = hr;
  document.getElementById("ampm").textContent = ampm;
}, 1000);
