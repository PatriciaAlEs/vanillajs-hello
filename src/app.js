import "./style.css";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generandoExcusas(quien, accion, que, cuando) {
  let itemQuien = Math.floor(Math.random() * quien.length);
  let itemAccion = Math.floor(Math.random() * accion.length);
  let itemQue = Math.floor(Math.random() * que.length);
  let itemCuando = Math.floor(Math.random() * cuando.length);

  return (
    quien[itemQuien] +
    " " +
    accion[itemAccion] +
    " " +
    que[itemQue] +
    " " +
    cuando[itemCuando]
  );
}

function onLoad() {
  var excusa = document.getElementById("excusas");
  excusa.innerHTML = generandoExcusas(who, action, what, when);
}
window.onload = onLoad;
