import "./styles.css";

//https://www.youtube.com/watch?v=RqQ1d1qEWlE//

document.getElementById("app").innerHTML = `
<h1>Bases del JS curso YouTube</h1>
<h4>https://www.youtube.com/watch?v=RqQ1d1qEWlE</h4>
<div></div>`;

// Comunicarse con la Consola desde la jecucion dl codigo a modo de control
console.error("mi primer error");
console.log("Hola Consola");

//Tipos de Datos//
      // 1) type "string" es una cadena de caracteres "Cualquier texto"
      //"Hola Codigo"
console.log("Hola Codigo")

      // 2) type "number" es un numero "10000"
      //10000
      //-2.3
      //2.3
 console.log(1000)

      // 3) typ"boolean" es un tipo de dato logico que es "true" o "false"
      //true;
      //false;

console.log(true)

      // 4) array (arreglo)es una lista ya sea de strings o de numeros 
      //(delimitda entre corchetes) de por ejemplo Clientes
      //["Jose", "Claudia", "Pablo", ]
  
  console.log(["Jose", "Claudia", "Pablo", ])
  console.log(["1", "2", "3", ])

      // object supongamos que quiero almacenar un conjunto de datos 
      //de un cliente compuesto por un 
      // "nombre del dato": "un valor del dato"
      
  console.log({
        "userName": "Jose"
        "score": 70.4
        "horas": 14
        "profesional": true
      })

      // Las Variables son cajas para almacenar datos para usarlos despues
      // var nombreVariable = "cualquier dato a guardar"
      // puedo llamarlas let o var

      var nombreVariable = "Jose";
  console.log(nombreVariable);

     let apellidoVariable = "Garcia";
  console.log(apellidoVariable);

  // var es variable a lo largo de la secuencia de ejecucion del 
  //codigo si cambio en una parte del codigo al definicion de la mism variable
  // si la vuelvo a llamarme mostrara la ultima definicion asignada 
  //por ejemplo cambio "Jose" por "Pablo"

     var nombreVariable = "Pablo";
  console.log(nombreVariable);

// cuando quiero definr una caja para guardar cualquier cosa que sea
// imposible que varie en el tiempo por mas que Yo me equivoque  
//intente en mi codigo cambiar su valor posteriormente....
// la defino como const 
// const nombreConstant = "cualquier constante"

      const PI = "3.1416";
   console.log(PI);   

     PI ="20";
   console.error(PI);

// Nombrar las variables usando canmelCase  siempre es una buena practica

    let numberOne = 20;
    let numberTwo = 30;
    let result = numberOne + numberTwo; //suma
  console.log(result);
    let result = numberOne > numberTwo;// mayor
  console.log(result);
    let result = numberOne < numberTwo;// menor
  console.log(result);
    let result = numberOne == numberTwo;// es igual?
  console.log(result);
  let result = numberOne != numberTwo; // es diferente?
  console.log(result);



console.log(result)
 
    let nombreOne = "Jose";
    let nombreTwo = "Maria";
    let result = nombreOne + nombreTwo;
    console.log(result);

    // Para separar los nombres puedo sumar un espacio asi + " " +
    let result = nombreOne + " " + nombreTwo; 
console.log(result);

      // Vamos a ver un Login como de Facebook 
    let passwordDB = "pepe";
    let inputUser = "pepe";
    // passwordDB es la contrasenia almcenada en la BD (Base de Datos)//
    // imputUser es la contrasenia que ingresa por teclado el usuar//
   let verifica = passwordDB === inputUser;
    //console.log(verifica);

    //Ahora vamos a gregar un CONDICIONAL segun el password sea true o false
    // Lo haremos cn palabras claves reservada
     if (verifica === true) {
        console.log("Password correcto");
      }
      if (verifica ===false) {
        console.log("Reingrese Password");
      }
      //Ahora agregamos la opcion de accion cuando el if no se cumple
      //lo hcemos via else
      if (verifica === true) {
        console.log("Password correcto");
      } else {
          console.log("Reingrese Password")
        }
      //Ahora un doble condicional
      let score = 70; // Modificar este score y se vera por console log si es Avanzado  Medio o Principiante
      if (score >60) {
        console.log("Avanzado");
      }
      if (score >30) {
        console.log("Nivel Medio"); //Aca vemos que pueden cumplirse 2 condiciones y muestr a 2 consle.log
      }
        else {
          console.log("Principiante")
        }

      //Ahora un doble condicional pero con else if
      let score = 100; // Modificar este score y se vera por console log si es Avanzado  Medio o Principiante
      if (score >60) {
        console.log("Avanzado");
      }
      else if (score >30) {
        console.log("Nivel Medio");
      }
        else {
          console.log("Principiante")
        }
        
        // Ahora veremos otra CONDICIONAL Qque es switch

      let typeCard = ("Debit Card"); // Modificar este nombre y se vera por console log
      switch (typeCard) {
        case "Debit Card"
          console.log("This is a Debit Card");
          break;
        case "Credit Card"
          console.log("This is a Credit Card");
          break;
        default: 
        console.log("No Card")

      }

      // Ahora veremos otra que son BUCLES O ITERADORES

        let count = 50; // Modificar este nombre y se vera por console log
      while (typeCard) {
        case "Debit Card"
          console.log("This is a Debit Card");

     


function nombre(nombre: any) {
  throw new Error("Function not implemented.");
}

