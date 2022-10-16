import { Server } from 'socket.io'

export const sveltekitSocketIo = () => {
    return {
        name: 'sveltekit-socket-io',
        /**
         * @param {{ httpServer: Partial<import("socket.io").ServerOptions> | undefined; }} server
         */
        configureServer(server) {
            const io = new Server(server.httpServer);

            // socket io stuff goes here 
            console.log(io);
            console.log('SocketIO Injected');
        }
    }
}