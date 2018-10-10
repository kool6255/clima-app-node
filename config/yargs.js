const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        des: 'direccion ciudad',
        demand: true
    }
}).argv;

module.exports = {
    argv
}