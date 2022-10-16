import { Server } from 'socket.io'

export const sveltekitSocketIo = async () => {
    return {
        name: 'sveltekit-socket-io',
        /**
         * @param {{ httpServer: Partial<import("socket.io").ServerOptions> | undefined; }} server
         */
        configureServer(server) {
            const io = new Server(server.httpServer);
            
            io.on('connection', (socket) => {
                // generate a random username and send it to the client to display it
                const username = `User ${Math.round(Math.random() * 99999)}`;
                socket.emit('name', username);
                
                // Receive incoming messages and broadcast them
                socket.on('message', (message) => {
                    io.emit('message', {
                        from: username,
                        message: message,
                        time: new Date().toLocaleString()
                    });
                });
            });
        }
    }
}