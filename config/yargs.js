const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'crear tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea por hacer', {
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}