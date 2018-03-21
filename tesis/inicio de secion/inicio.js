function Inicio() {
  var usuario = "";
  var contraseña = "";
  var larrymemo = "larrymemo";
  var hitme43 = "hitme43";
  var correcto = 0;
  var correcta = 0;
   usuario = document.getElementById('usuario').value;
   contraseña = document.getElementById('contraseña').value;
   var bien = (correcta + correcto);
   if (usuario=="larrymemo") {
     var correcto = 2;
   }else {
     var correcto = 3;
   }if (contraseña=="hitme43") {
      var correcta = 2;
   }else {
     var correcta = 3;
   }
var bien = (correcta + correcto);
    var correcto = 0;
     var correcta = 0;
   if (bien == 4 ){ document.getElementById('resultado').innerHTML = '<a href="file:///C:/Users/Auxiliar%20admon/Desktop/bach%2018/el%20chido/index.html">Iniciar</a>';
 }else {
    document.getElementById('resultado').innerHTML = "La Contraseña o el Usuario son incorrectos";;
 }
}
