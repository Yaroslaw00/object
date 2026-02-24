/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    const everyTrancsaction = {
      id: 1,
      type,
      amount,
    };
    return everyTrancsaction;
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    account.balance += amount;
    const callForFunction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(callForFunction);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const Transaction of this.transactions) {
      if (Transaction.id === id) {
        return Transaction;
      } else {
        console.log("Анлак");
      }
    }
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let hightransaction = 0;

    for (const Transaction of this.transactions) {
      if (Transaction.type === type) {
        hightransaction += Transaction.amount;
      }
    }
    return hightransaction;
  },
};

account.deposit(1000);
account.getTransactionDetails(1);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
account.deposit(1278);
console.log(account);
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
