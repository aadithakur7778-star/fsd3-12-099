import {EventEmitter } from "node:events";
const login = (name) => {
    console.log(`Welcome ${name} you logged in successfully`);
};
const start = () => {
    console.log("Application started");
};
const working = (name) => {
    console.log(`${name} add item to cart`);
};
const checkout = (name) => {
    console.log(`${name} logged out successfully`);
}
//const exit = () => {
//    console.log("Application shut down");
//}


const task = new EventEmitter();
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);
//task.on("exit", exit);

task.once("exit",() => {
    console.log("Application shut down");
});
task.emit("greet", "Aditya");
task.emit("greet", "aditya");
task.off("greet", working);
task.emit("greet", "Aadi");
task.emit("greet", "ad");
