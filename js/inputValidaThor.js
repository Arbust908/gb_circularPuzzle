/**
 * Toma un Valor 'String' o 'Number' y un Minimo 'Number'
 * - Chequea si el valor es vacio
 * - El largo del Valor es menor igual al Minimo
 * Devuelve Booleano.
 * <True> si cumple alguno. Quiere decir que o es corto o es vacio
 * <False> No es ni corto ni vacio
 */
function emptyOrLength(value,min){
  // console.log( value === ''? value+' esta vacio':'--'+value);
  // console.log( value.length <= min ? value+' es menor a '+min:'--'+value+min);
  return (value === "" || value.length <= min);
}
/**
 * Toma el codigo de area y el contenido del telefono
 * Le concatena el 0 y el 15 para que tome bien el formato
 * Devuelve un string con el telefono.
 */
function formatPhone(pre,cont){
  return '0'+pre+'-15-'+cont;
}
// function trem(tst){
//   return tst.trim();
// }
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emilio = email.trim();
  // console.log(emilio);
  emilio = String(emilio);
  // console.log(emilio);
  emilio = emilio.toLowerCase();
  // console.log(emilio);
  // console.log(re.test(emilio));
  // console.log((!emptyOrLength(email.trim(),7))?'emilio es largo':'El emilio es...');
  return (!emptyOrLength(email.trim(),7) && re.test(String(email.trim()).toLowerCase()));
}

function validatePhone(phone) {
  let tel = phone.trim();
  var re = /^[\+]?[(]?[0-9]{2,10}[)]?[-\s\.]?[0-9]{0,6}[-\s\.]?[0-9]{1,10}$/;
  return (!emptyOrLength(tel,5) && re.test(tel));
}
function validatePhoneZone(phone) {
  let area = phone.trim();
  return (!emptyOrLength(area,1));
}

function validateName(name) {
  return (!emptyOrLength(name.trim(),2));
}
function validateInput(input) {
  return (input.trim() || !emptyOrLength(name.trim(),2));
}