const apiKey = '1e0ddd45438d4cdeb5e104942241112';
const baseURL = 'https://api.weatherapi.com/v1';

document.getElementById('get-weather').addEventListener('click', () => {
    const ciudad = document.getElementById('city-input').value;
    if (ciudad) {
        obtenerClima(ciudad);
    } else {
        alert('Por favor, ingresa una ciudad');
    }
});

async function obtenerClima(ciudad) {
    try {
        //! Obtener clima actual y previsión
        const respuesta = await fetch(`${baseURL}/forecast.json?key=${apiKey}&q=${ciudad}&aqi=no`);
        const datos = await respuesta.json();

        if (datos.error) {
            document.getElementById('weather-info').textContent = 'Ciudad no encontrada';
            return;
        }

        //! Mostrar información actual del clima
        const climaActual = datos.current;
        const ubicacion = datos.location;
        
        document.getElementById('location').textContent = `${ubicacion.name}, ${ubicacion.country}`;
        document.getElementById('weather-state').textContent = climaActual.condition.text;
        document.getElementById('weather-icon').src = 'https://cdn.weatherapi.com/weather/64x64/day/113.png';

        document.getElementById('weather-icon').alt = climaActual.condition.text;
        document.getElementById('temperature').textContent = `${climaActual.temp_c}°C`;
        document.getElementById('precipitation').textContent = `Precipitaciones: ${climaActual.precip_mm} mm`;
        document.getElementById('humidity').textContent = `Humedad: ${climaActual.humidity}%`;
        document.getElementById('wind').textContent = `Viento: ${climaActual.wind_kph} km/h`;

        //! Mostrar previsión por horas
        const previsiones = datos.forecast.forecastday[0].hour;
        let htmlPorHora = '';
        previsiones.forEach(hora => {
            htmlPorHora += `
                <div class="hourly-item">
                    <p><strong>${hora.time.split(' ')[1]}</strong></p>
                    <img src="${hora.condition.icon}" alt="${hora.condition.text}">
                    <p>${hora.temp_c}°C</p>
                </div>
            `;
        });
        document.getElementById('hourly-forecast').innerHTML = htmlPorHora;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}



