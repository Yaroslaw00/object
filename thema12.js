// Завдання 1
// const user = {
//   hobby: "basketball",
//   premium: true,
// };

// user.mood = "happy";

// user.hobby = "skydiving";

// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// Завдання 2
const user = {
  name: "Ivan",
  age: 20,
  city: "Kyiv",
};

function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps(user));
// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// const employeeTasks = {
//   Олександр: 12,
//   Марія: 25,
//   Андрій: 8,
//   Олена: 19,
// };

// function findBestEmployee(employees) {
//   let bestEmployer = "";
//   let completeTasks = 0;
//   for (const key in employees) {
//     const value = employees[key];
//     console.log(key, value);
//     if (value > completeTasks) {
//       bestEmployer = key;
//       completeTasks = value;
//     }
//   }

//   return bestEmployer;
// }
// const foundthebest = findBestEmployee(employeeTasks);
// console.log(foundthebest);
// Завдання 4
const employees = {
  Ivan: 1000,
  Anna: 1600,
  Petro: 1300,
};
function countTotalSalary(employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }

  return total;
}

console.log(countTotalSalary(employees)); // 3900
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
