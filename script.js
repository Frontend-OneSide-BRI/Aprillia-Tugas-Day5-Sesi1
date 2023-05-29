const user = [
  { id: 1, username: "lala", address: "jakarta" },
  { id: 2, username: "lili", address: "Surabaya" },
];

const transaction = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "sedang dikrim" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "selesai" },
      { id: 2, status: "dibatalkan" },
    ],
  },
];

const detailTransaction = [
  { id: 1, productName: "Kopi Hitam", qty: 3, totalAmount: 3000 },
  { id: 2, productName: "Gula Pasir", qty: 1, totalAmount: 5000 },
];

// Callback
function login(username, callback) {
  setTimeout(() => {
    return callback(
      user.find((e) => {
        return e.username === username;
      })
    );
  }, 1000);
}

function getTransaction(user_id, callback) {
  setTimeout(() => {
    return callback(
      transaction.find((e) => {
        return e.user_id === user_id;
      }).transaction
    );
  }, 1000);
}

function getDetailTransaction(user_id, callback) {
  setTimeout(() => {
    return callback(
      detailTransaction.find((e) => {
        return e.id === user_id;
      })
    );
  }, 1000);
}

login("lala", (user) => {
  console.log(user);
  getTransaction(user.id, (transaction) => {
    console.log(transaction);
  });
  getDetailTransaction(user.id, (detailTransaction) => {
    console.log(detailTransaction);
  });
});

//promise
function login1(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = user.find((e) => {
        return e.username === username;
      });

      if (!userData) {
        reject(new Error("User not found"));
      } else {
        resolve(userData);
      }
    }, 1000);
  });
}

function getTransaction1(user_id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = transaction.find((e) => {
        return e.user_id === user_id;
      }).transaction;

      if (!userData) {
        reject("User not found");
      } else {
        resolve(userData);
      }
    }, 1000);
  });
}

function getDetailTransaction1(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = detailTransaction.find((e) => {
        return e.id === id;
      });

      if (!userData) {
        reject("User not found");
      } else {
        resolve(userData);
      }
    }, 1000);
  });
}

login1("lili")
  .then((user) => {
    console.log(user);
    return getTransaction1(user.id);
  })
  .then((transaction) => {
    console.log(transaction);
    return getDetailTransaction1(transaction[0].id);
  })
  .then((detail) => {
    console.log(detail);
  })
  .catch((error) => console.log(error));

//ascy-await
async function login2(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = user.find((e) => {
        return e.username === username;
      });

      if (!userData) {
        reject(new Error("User not found"));
      } else {
        resolve(userData);
      }
    }, 1000);
  });
}

async function getTransaction2(user_id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = transaction.find((e) => {
        return e.user_id === user_id;
      }).transaction;

      if (!userData) {
        reject("User not found");
      } else {
        resolve(userData);
      }
    }, 1000);
  });
}

async function getDetailTransaction2(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = detailTransaction.find((e) => {
        return e.id === id;
      });

      if (!userData) {
        reject("User not found");
      } else {
        resolve(userData);
      }
    }, 1000);
  });
}

//iife js
(async () => {
  try {
    const user = await login2("lili");
    console.log(user);
    const transactionData = await getTransaction2(user.id);
    console.log(transactionData);
    const detailTransaction = await getDetailTransaction2(
      transactionData[0].id
    );
    console.log(detailTransaction);
  } catch (error) {
    console.log(error);
  }
})();
