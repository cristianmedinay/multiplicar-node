const opts = {
    base: {
        demand: true,
        alias: 'a'
    },
    limite: {
        default: 10,
        alias: 'b'

    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opts)
    .help()

.argv;



module.exports = {
    argv
}