const f1 = () => {
  console.log("F1");
};
const f2 = () => {
  console.log("F2");
};
const f3 = () => {
  console.log("F3");
};
function main() {
  console.log("main😂");
  setTimeout(f1, 1000); //iska mtlb yeh hua is function ko itne time baad run krao
 setImmediate(f2);
  
  f3();
  console.log("ended🥶");
}
main();
// single threaded mtlb hota h
