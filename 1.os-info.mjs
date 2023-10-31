//const os = require('node:os');

import os from 'node:os';

console.log('Informacion del sistema operativo');
console.log('________________________________');

console.log('Nombre del sistema operativo: ', os.platform());
console.log('Arquitectura: ',os.arch());
console.log('Version del sistema operativo: ', os.release());
console.log('Nombre del sistema operativo:', os.type());
console.log('CPUS: ', os.cpus());
console.log('Memoria libre: ', os.freemem() /1024 /1024 );
console.log('Memoria total: ', os.totalmem()/1024 /1024 );
console.log('uptime: ', os.uptime()/60 );