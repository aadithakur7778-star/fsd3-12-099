import { EventEmitter } from 'events';

const button = new EventEmitter();

button.on("click", (uname) => {
    console.log(`button clicked by ${uname}`);
});
button.emit("click", "Aadi");
button.emit("click", "Aditya");
button.emit("click", "Abhishek");
button.emit("click");