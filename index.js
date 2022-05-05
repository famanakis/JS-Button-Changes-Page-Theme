const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const body = document.getElementById("body")
const container = document.getElementById("container")

btn.addEventListener('click', christmas);

function christmas() {
  greeting.innerText = "🎄 Merry Christmas 🎄";  
  greeting.style.fontSize = '1.3em';
  greeting.style.fontFamily = 'Meow Script, cursive';
  body.style.backgroundImage = 'url("img/ccanes.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.innerText = "Time to Celebrate!";
  btn.style.backgroundColor = 'rgb(0, 201, 10)';
  btn.addEventListener('click', newYear);
}

function newYear() {
  greeting.innerText = "🥳 Happy New Year 🥳";
  greeting.style.fontSize = '1.1em';
  greeting.style.color = 'rgb(245, 204, 24)';
  greeting.style.fontFamily = 'Arial Black, Helvetica, sans-serif';
  container.style.backgroundColor = 'rgb(9, 42, 61)';
  body.style.backgroundImage = 'url("img/newYear.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.innerText = "after the fun...";
  btn.style.backgroundColor = 'rgb(88, 137, 166)';
  btn.addEventListener('click', love);
}

function love() {
  greeting.innerText = "💘 Love is in the Air 💘";
  greeting.style.fontSize = '1.1em';
  greeting.style.color = 'rgb(150, 3, 43)';
  greeting.style.fontFamily = 'Brush Script MT, cursive';
  container.style.backgroundColor = 'rgb(240, 218, 224)';
  body.style.backgroundImage = 'url("img/valentines.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.innerText = "just around the corner...";
  btn.style.backgroundColor = 'rgb(204, 65, 103)';
  btn.addEventListener('click', easter);
}

function easter() {
  greeting.innerText = "🐇 Hoppy Easter 🐇";
  greeting.style.fontSize = '1.5em';
  greeting.style.color = 'rgb(239, 230, 240)';
  greeting.style.fontFamily = 'Baskerville, Garamond, serif';
  container.style.backgroundColor = 'rgb(215, 96, 219)';
  body.style.backgroundImage = 'url("img/easter.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.innerText = "is it time yet???";
  btn.style.backgroundColor = 'rgb(126, 126, 191)';
  btn.addEventListener('click', travel);
}

function travel() {
  greeting.innerText = "✈️ Summmer Vacation ✈️";
  greeting.style.fontSize = '1.1em';
  greeting.style.color = 'rgb(4, 184, 151)';
  greeting.style.fontFamily = 'Trebuchet MS, Tahoma, sans-serif';
  container.style.backgroundColor = 'rgb(199, 239, 240)';
  body.style.backgroundImage = 'url("img/travel.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.innerText = "back to the grind...";
  btn.style.backgroundColor = 'rgb(237, 203, 109)';
  btn.style.color = 'rgb(6, 92, 90)';
  btn.addEventListener('click', school);
}

function school() {
  greeting.innerText = "😅 School, Work, Life... 😅";
  greeting.style.fontSize = '1.1em';
  greeting.style.color = 'rgb(4, 122, 0)';
  greeting.style.fontFamily = 'TimesNewRoman, Georgia, serif';
  container.style.backgroundColor = 'rgb(226, 250, 225)';
  body.style.backgroundImage = 'url("img/school.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.innerText = "Boo is it?";
  btn.style.backgroundColor = 'rgb(125, 181, 123)';
  btn.style.color = 'rgb(255, 255, 255)';
  btn.addEventListener('click', halloween);
}

function halloween() {
  greeting.innerText = "🎃 Happy Halloween 🎃";
  greeting.style.fontSize = '1.5em';
  greeting.style.color = 'rgb(138, 57, 0)';
  greeting.style.fontFamily = 'Shadows Into Light, cursive';
  container.style.backgroundColor = 'rgb(250, 168, 110)';
  body.style.backgroundImage = 'url("img/halloween.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.innerText = "Almost there...";
  btn.style.backgroundColor = 'rgb(79, 75, 68)';
  btn.addEventListener('click', end);
}

function end() {
  greeting.innerText = "The End";
  greeting.style.fontSize = '1.5em';
  greeting.style.color = 'white';
  greeting.style.fontFamily = 'Arial, sans';
  greeting.style.paddingTop = '60px';
  container.style.backgroundColor = 'rgb(22, 22, 56)';
  body.style.backgroundImage = 'url("img/end.jpg")';
  body.style.backgroundSize = 'cover';  
  btn.style.zIndex = '-1';
}
 // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December




 

