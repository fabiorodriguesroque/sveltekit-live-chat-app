import ioClient from 'socket.io-client';

const endpoint = 'http://127.0.0.1:5173/';

const socket = ioClient(endpoint);

export const io = socket;