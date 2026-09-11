import { EventEmitter } from 'events';
const form = new EventEmitter();
form.on('submit', (uname,password) => {
    console.log(`user name: ${uname}`);
    console.log(`user password: ${password}`);
});

form.emit('submit', 'Aadi', '1234');