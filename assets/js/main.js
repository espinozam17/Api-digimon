function consultar() {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
      .then((res) => {
        return res.json();
      })
      .then((listadoDigimons) => {
        $("#contenedor").html("");
        for (const digimon of listadoDigimons) {
          $("#contenedor").append(`
          <div class="col mt-2 mb-2">
            <div class="card">
              <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
          </div>`);
        }
      });
  }
  
  function consultarNombre(nombre) {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombre}`)
      .then((res) => {
        return res.json();
      })
      .then((listadoDigimons) => {
        $("#contenedor").html("");
        for (const digimon of listadoDigimons) {
          $("#contenedor").append(`
          <div class="col mt-2 mb-2">
            <div class="card">
              <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
          </div>`);
        }
      });
  }
  
  function verNivel(nivel){
    fetch(`https://digimon-api.vercel.app/api/digimon/level/${nivel}`)
      .then((res) => {
        return res.json();
      })
      .then((listadoDigimons) => {
        $("#contenedor").html("");
        for (const digimon of listadoDigimons) {
          $("#contenedor").append(`
          <div class="col mt-2 mb-2">
            <div class="card">
              <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}</p>
            </div>
          </div>
          </div>`);
        }
      });
    
  }
 



  $(document).ready(function () {
    $(document).on("click", "#btn-mostrar",  function () {
      consultar();
    });
  
    $(document).on("keyup", "#buscador", function () {
      let nombre = $("#buscador").val();
      consultarNombre(nombre);
    });
    
    
  });
  