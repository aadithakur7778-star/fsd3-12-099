import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const fetCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addToCart = async (product) => {
  const myCart = await fetCart();
  const isFound = myCart.find((item) => item.id === product.id);

  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }

  await saveCart(myCart);
  console.log(`product added/updated with id ${product.id} into cart`);
};

const main = async () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  console.log("Welcome to Flipkart👌");
  console.log("1. Add Product");
  console.log("2. View Product");
  console.log("3. Update Product");
  console.log("4. Delete Product");
  console.log("5. Exit");

  const option = await rl.question("Enter your choice: ");

  switch (option) {
    case "1": {
      const data = await rl.question("Enter id, name, price, qty: ");
      const [id, name, price, qty] = data.split(",").map((item) => item.trim());

      const product = {
        id: Number(id),
        name,
        price: Number(price),
        qty: Number(qty),
      };

      await addToCart(product);
      break;
    }
    case "2":
      console.log("View Product");
      await showCart();
      break;
    case "3":
      console.log("Update Product");
      break;
    case "4":
      console.log("Delete Product");
      break;
    case "5":
      console.log("Exit");
      break;
    default:
      console.log("Invalid choice");
      break;
  }

  rl.close();
};

main();
