/* window.onload = function mensaje() {
  let nombre = "Gonzalo";
  let apellido = "Pelizza";
  let nacimiento = 1994;

  console.log("Bienvenido" + " " + nombre + "," + apellido);
}
*/

/*
window.onload = function solicitarDatos() {

  let nombre = prompt("Por favor, ingrese su nombre");
  let apellido = prompt("Por favor, ingrese su apellido");
  let anoNacimiento = prompt("Por favor, ingrese su año de nacimiento");
  console.log("Gracias");
}
*/

window.onload = function mensaje() {
  const fechaActual = new Date();
  let nombre = prompt("Por favor, ingrese su nombre");
  let apellido = prompt("Por favor, ingrese su apellido");
  let nacimiento = new Date(prompt("Por favor, ingrese su año de nacimiento"));
  let calculoDias = Math.round((fechaActual - nacimiento) / (1000 * 60 * 60 * 24));

  console.log("Bienvenido" + " " + nombre + "," + apellido);

  console.log("La cantidad de vividos hasta la fecha son :" + " " + calculoDias);

}