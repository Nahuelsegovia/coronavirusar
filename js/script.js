const obtenerInformacion = document.querySelector('#obtenerInformacion');
const pintarInformacion = document.querySelector('#pintarInformacion')
const formulario = document.querySelector('#formulario')
const contenedorLoader = document.querySelector('#loader')
const body = document.querySelector('#body')


obtenerInformacion.addEventListener('click', (event) =>{
    event.preventDefault();
    const peticion = new XMLHttpRequest();
    
    peticion.open('GET', 'https://crossorig.in/https://www.covidvisualizer.com/api', true)
    peticion.addEventListener('load', (data) =>{
        let datos = JSON.parse(data.target.response)
        let infectadosTotales = datos.countries.AR.cases
        let infectadosActivos = datos.countries.AR.reports
        let infectadosRecuperados = datos.countries.AR.recovered
        let infectadosFallecidos = datos.countries.AR.deaths;
        pintarInformacion.innerHTML+= `
                            <div class="informacionInfectados">
                                <div class="alert alert-danger" role="alert">
                                INFECTADOS TOTALES: ${infectadosTotales}
                                </div>
                                <div class="alert alert-warning" role="alert">
                                INFECTADOS ACTIVOS: ${infectadosActivos}
                                </div>
                                <div class="alert alert-info" role="alert">
                                INFECTADOS RECUPERADOS: ${infectadosRecuperados}
                                </div>
                                <div class="alert alert-light" role="alert">
                                FALLECIDOS: ${infectadosFallecidos}
                                </div>
                            </div>
                            `
    });

    peticion.send()
});

window.onload = () => {
    formulario.style.visibility = 'hidden';
    obtenerInformacion.click();
}

let actualizarApp = setTimeout( () => {
    location.reload()
}, 120000)

