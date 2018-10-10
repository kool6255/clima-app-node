const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=40ff8d86c34bfbe5db91bff0e600dad6`)

    return resp.data.main.temp

}

module.exports = {
    getClima
}