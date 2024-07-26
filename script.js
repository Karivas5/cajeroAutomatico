
while (true) {
    console.log("Bienvenido al cajero automático") 
    const cuentas = parseInt(prompt("Ingresa tu NIP:    "))
    if(cuentas=== 5045){
        console.log("¡Hola Mali! Por favor, elige una de las siguientes opciones:")
        alert("¡Hola Mali! \nPor favor, elige una de las siguientes opciones:")
    }else if(cuentas=== 1378){
        console.log("¡Hola Gera! Por favor, elige una de las siguientes opciones:")
        alert("¡Hola Gera! \nPor favor, elige una de las siguientes opciones:")
    }else if(cuentas=== 8921){
        console.log("¡Hola Maui! \nPor favor, elige una de las siguientes opciones:")
        alert("¡Hola Maui! \nPor favor, elige una de las siguientes opciones:")
    }else{
        console.error("NIP incorrecto, intentelo nuevamente.")
        alert("NIP incorrecto, intentelo nuevamente")
    }

    let opcion1 = prompt("1. Consultar saldo\n\n2. Depositar\n\n3. Retirar\n\n4. Salir");
    if (opcion1 === "1") {
      console.log("Consultar saldo");
      let saldo=prompt("Ingresa tu NIP nuevamente.");
    if(saldo==="5045"){
      alert("Tu saldo actual es de: $200")
    }else if(saldo==="1378"){
      alert("Tu saldo actual es de: $290 ")
    }else if(saldo==="8921"){
      alert("Tu saldo actual es de: $67 ")
    }else{
      alert("NIP incorrecto.")
    }
  }

   let opcion2 = prompt("¿Deseas realizar otra operación?\n1. Consultar saldo\n\n2. Depositar\n\n3. Retirar\n\n4. Salir");
if (opcion2 === "2") {
  console.log("Depositar");
  let saldo=prompt("Ingresa la cantidad que deseas depositar:");
if(saldo==="5045"){
  alert("Tu saldo actual es de: $200")
}else if(saldo==="1378"){
  alert("Tu saldo actual es de: $290")
}else if(saldo==="8921"){
  alert("Tu saldo actual es de: $67 ")
}

   let opcion3 = prompt("¿Deseas realizar algo más?\nElige una opcion:\n\n1. Consultar saldo\n\n2. Depositar\n\n3. Retirar\n\n4. Salir");
if (opcion3 === "3") {
  console.log("Retirar");
  let saldo=prompt("Ingresa tu NIP para poder retirar.");
  let retiro=prompt("Ingresa la cantidad que deseas retirar:");
if(saldo==="5045"){
  alert(`Tu saldo actual es de:$${Cantidad1-CantidadT}`)
}else if(saldo==="1378"){
  alert("Tu saldo actual es de:$")
}else if(saldo==="8921"){
  alert("Tu saldo actual es de:$")
  }else{
    alert("NIP incorrecto.")
  }
}

   let opcion4 = prompt("¿Deseas realizar algo más?\nElige una opcion:\n1. Consultar saldo\n\n2. Depositar\n\n3. Retirar\n\n4. Salir");
if (opcion4 === "4") {
  console.log("Salir");
  let saldo=prompt("¿Seguro que desea salir: \n\n1.Si\n\n2.No");
if(saldo==="1"){
  alert("Gracias por utilizar nuestro cajero.\nVuelva pronto.")
}else{
    let salir=prompt("¿Deseas realizar algo más?\nElige una opcion:\n\n1. Consultar saldo\n\n2. Depositar\n\n3. Retirar\n\n4. Salir");
  }
}
}
}

