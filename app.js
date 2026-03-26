let display = document.getElementById("display");

function addToDisplay(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);

  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Erro";
  }
}

function toggleTheme() {
  document.body.classList.toggle("light");

  const btn = document.querySelector(".theme-btn");

  if (document.body.classList.contains("light")) {
    btn.innerText = "🌙";
  } else {
    btn.innerText = "☀️";
  }
}

function toggleTheme() {
  document.body.classList.toggle("light");

  const btn = document.querySelector(".theme-btn");

  if (document.body.classList.contains("light")) {
    btn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    btn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  }
}

window.onload = function () {
  const theme = localStorage.getItem("theme");
  const btn = document.querySelector(".theme-btn");

  if (theme === "light") {
    document.body.classList.add("light");
    btn.innerText = "🌙";
  } else {
    btn.innerText = "☀️";
  }
};