// var arreglo = [1, 2, 3];
//
// for (var i = 0; i < arreglo.length; i++) {
//     // cuerpo
// }
//
//
// var person = {fname:"John", lname:"Doe", age:25};
// var text = "";
// var x;
// for (x in person) {
//     console.log("x es :" + x);
//     console.log("person[x] es : " + person[x]);
//     text += person[x] + " ";
// }
// var text = "";
// var datos = ["John", "Doe", 25];
// for (x in datos) {
//     console.log("x es :" + x);
//     console.log("datos[x] es : " +datos[x]);
//     text += datos[x] + " ";
// }
//
// var person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// };
//
//
// datos.forEach(function (value) {
//  console.log(value);
// });
//
// datos.forEach(function(elemento, indice, array) {
//  console.log(elemento, indice);
// });
//
// var listado = document.getElementById('listas');
//
// var elementos_listado = document.querySelectorAll('#listas li');
// elementos_listado.forEach(function (){
//
// });
//
document.querySelector('.selector').addEventListener('change', function (e){
    let expr = this.value;
    document.getElementById('valor').value = expr;
});
//
//

let valor_js = document.querySelector('#valor').value;
let valor_jq = $('#valor').val();