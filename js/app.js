function obtenerHora() {
  let fechaActual = new Date();

  let diasSemanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let mesesAnio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let parrafoFecha = document.querySelector("#fecha");
  let parrafoHora = document.querySelector("#hora");

  parrafoFecha.innerHTML = `${
    diasSemanas[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    mesesAnio[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;

  let hora = fechaActual.getHours(),
    minutos = fechaActual.getMinutes(),
    segundos = fechaActual.getSeconds(),
    AmPm = "";

  if (hora >= 12) {
    AmPm = "PM";
  }

  if (hora > 12) {
    hora -= 12;
  } else {
    AmPm = "AM";
  }

  if (hora === 0) {
    hora = 12;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (hora < 10) {
    hora = "0" + hora;
  }

  parrafoHora.innerHTML = `${hora}:${minutos}:${segundos} - ${AmPm}`;
}

setInterval(obtenerHora, 1000);
