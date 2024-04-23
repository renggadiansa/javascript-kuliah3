//console.log('Hallo kita akan belajar membuat server menggunakan Hapi.js');

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Homepage';
            }
        },
        {
            method: 'GET',
            path: '/about',
            handler: (request, h) => {
                return 'About Page';
            }
        },
        {
            method: 'GET',
            path: '/help',
            handler: (request, h) => {
                return 'Help Page'
            }
        },
    ])
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();