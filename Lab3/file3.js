import{stat} from "fs/promises"
const fstat = await stat("hello.txt")
console.log("file size is ",fstat.size,"bytes");
console.log(`is file: ${fstat.isFile()}`);   
console.log(`is folder: ${fstat.isDirectory()}`);
console.log(`is syslink: ${fstat.isSymbolicLink()}`);
console.log(`created at: ${fstat.birthtime}`);
console.log(`Last accessed at: ${fstat.atime}`);