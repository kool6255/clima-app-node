const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getinfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let tempe = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${direccion} es de ${ tempe} grados centigrados`
    } catch (error) {
        return `No se pudo determinar e clima en ${direccion}`
    }

}

getinfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));