// Завдання 1
const user = {
  hobby: "basketball",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}
// // Завдання 5
// function getAllPropValues(arr, prop) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const elment = arr[i];
//     if (prop in elment) {
//       result.push(elment[prop]);
//     }
//     console.log(elment);
//     console.log(elment[prop]);
//   }
// }
// const products = [
//   { name: "Apple", price: 30, quantity: 3 },
//   { name: "Banana", price: 20, quantity: 5 },
//   { name: "Orange", price: 25, quantity: 2 },
// ];

// // Завдання 6

// getAllPropValues(products, "name");

// const allProdcuts = [
//   { product: "sandwich", price: 20, count: 1 },
//   { product: "milk", price: 55, count: 2 },
//   { product: "butter", price: 80, count: 3 },
// ];
// function calculateTotalPrice(allProdcuts, productName) {
//   for (const product of allProdcuts) {
//     if (product.product === productName) {
//       return product.price * product.count;
//     }
//   }
//   return 0;
// }
// console.log(calculateTotalPrice(allProdcuts, "butter"));
