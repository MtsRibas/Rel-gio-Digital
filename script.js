const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

const relogio = setInterval(function time() {
  let diaAtual = new Date();
  let hr = diaAtual.getHours();
  let min = diaAtual.getMinutes();
  let sec = diaAtual.getSeconds();
  let day = diaAtual.getDate();
  let month = diaAtual.getMonth() + 1;
  let year = diaAtual.getFullYear();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  horas.textContent = hr + ":";
  minutos.textContent = min + ":";
  segundos.textContent = sec;
  dia.textContent = day;
  mes.textContent = month;
  ano.textContent = year;
});
