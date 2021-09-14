function cambiarColor(param1, param2) {
    document.querySelector(param1).style.backgroundColor = param2;
  }
  
  function escribirTiempo(param1, param2) {
    document.querySelector(param1).innerHTML = param2;
  }
  
  let tiempoRojo = 0;
  let tiempoAmarillo = 0;
  let tiempoVerde = 0;
  
  function cicloSemaforo() {
  
    /* ------- Timer Rojo ------- */
    let numeroRojo;
  
    if (tiempoRojo == 0) {
      cambiarColor(".rojo", "red");
    }
  
    if (tiempoRojo < 10) {
      numeroRojo = `0${tiempoRojo}`;
    } else {
      numeroRojo = tiempoRojo;
    }
  
    escribirTiempo(".bloqueRojo", numeroRojo);
    tiempoRojo++;
  
    if (tiempoRojo == 8) {
      cambiarColor(".rojo", "rgb(80, 80, 80");
    }
  
    /* ------- Timer Amarillo ------- */
    let numeroAmarillo;
  
    if (tiempoAmarillo == 5) {
      cambiarColor(".amarillo", "yellow");
    } else if (tiempoAmarillo == 8) {
      cambiarColor(".amarillo", "rgb(80, 80, 80)");
    }
  
    if (tiempoAmarillo < 10) {
      numeroAmarillo = `0${tiempoAmarillo}`;
    } else {
      numeroAmarillo = tiempoAmarillo;
    }
  
    escribirTiempo(".bloqueAmarillo", numeroAmarillo);
    tiempoAmarillo++;
  
    if (tiempoAmarillo == 15) {
      cambiarColor(".amarillo", "yellow");
    }
    if (tiempoAmarillo == 18) {
      cambiarColor(".amarillo", "rgb(80, 80, 80)");
    }
  
    /* ------- Timer Verde ------- */
    let numeroVerde;
  
    if (tiempoVerde == 8) {
      cambiarColor(".verde", "green");
    }
  
    if (tiempoVerde < 10) {
      numeroVerde = `0${tiempoVerde}`;
    } else {
      numeroVerde = tiempoVerde;
    }
  
    escribirTiempo(".bloqueVerde", numeroVerde);
    tiempoVerde++;

    if(tiempoVerde == 17) {
        cambiarColor(".verde", "rgb(80, 80, 80");
    }
  
    if(tiempoVerde == 18) {
        tiempoAmarillo = 0;
        tiempoRojo = 0;
        tiempoVerde = 0;
    }
  }
  
  setInterval(cicloSemaforo, 1000);