// const wallet = {
//   owner: "1",
//   currency: "ERO",
//   amount: 100000,

// minusMoney(i){
//   if(wallet.amount < i){console.error("помилка")
//      return}

//   wallet.amount -= i;
//     alert(Баланс гаманця:${wallet.amount});
// },
//   addMoney(sum) {
//     wallet.amount += sum;
//     alert(Баланс гаманця:${wallet.amount});
//   }
// };
// const wq = confirm("поповнити гаманець");
// if (wq) {
//   const er = Number(prompt("cкількі"));
//   wallet.addMoney(er);
//   console.log(wallet);
// }
// // wallet.addMoney
// console.log(wq);

// const qaz = confirm("зняти кошти");
// if(qaz){
//   const question = prompt("скільки коштів хочете зняти?");
//   wallet.minusMoney(Number(question))

// }

// function BigMoney(object) {
//   let biggestpodatok = 0;
//   let profession = "";
//   const allkeys = Object.keys(object);
//   for (const key of allkeys) {
//     if (object[key] > biggestpodatok) {
//       profession = key;
//       biggestpodatok = object[key];
//     }
//   }

//   return profession;
// }

// const zarplata = {
//   buhalter: 27500,
//   derector: 65000,
//   robitniki: 32500,
//   arhitector: 37500,
// };
// const richest = BigMoney(zarplata);
// console.log(richest);

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

// const weather = {
//   temperature: 11,
//   humidity: 0.7,
//   windSpeed: 3.5,
//   gradCelcius(grad) {
//     if (grad < 0) {
//       return true;
//     } else if (grad == 0) {
//       return "Температура 0 градусів";
//     } else {
//       return false;
//     }
//   },
// };
// const usetemp = Number(prompt("Введіть температуру вашої погоди"));
// if (weather.gradCelcius(usetemp)) {
//   console.log("Температура нище 0 aбо 0");
// } else {
//   console.log("Температура вище 0");
// }

const money = prompt("Поповніть рахунок");
const bankAccount = {
  ownerName: "Yaroslav",
  accountNumber: 347547,
  balance: 92500,

  deposit(sum) {
    this.balance += sum;
    return this.balance;
  },
  withdraw(sum) {
    if (this.balance > sum) {
      this.balance -= sum;
      return this.balance;
    } else {
      console.log("Ой помилочка");
    }
  },
};

const user = {
  name: "Yarik",
  email: "yaro901@gmail.com",
  password: "parol228",

  login(inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      console.log("Перевірка пройдена");
    } else {
      console.log("Перевірка не пройдена");
    }
  },
};

// Перевірка
user.login("yaro901@gmail.com", "parol228"); // Перевірка пройдена
