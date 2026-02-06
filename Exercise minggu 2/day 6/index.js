/* ------------------------------- 1.EXERCISE ------------------------------- */
let students = [
  { name: "Andi", email: "andi@mail.com", age: 20, score: 80 },
  { name: "Budi", email: "budi@mail.com", age: 22, score: 90 },
  { name: "Cici", email: "cici@mail.com", age: 19, score: 70 },
];

function CalculateStudentData(array) {
  let scoreHighest = array[0].score;
  let scoreLowest = array[0].score;
  let scoreTotal = 0;

  let ageHighest = array[0].age;
  let ageLowest = array[0].age;
  let ageTotal = 0;

  for (let i = 0; i < array.length; i++) {
    //score
    if (array[i].score > scoreHighest) {
      scoreHighest = array[i].score;
    }
    if (array[i].score < scoreLowest) {
      scoreLowest = array[i].score;
    }

    scoreTotal += array[i].score;

    // AGE
    if (array[i].age > ageHighest) {
      ageHighest = array[i].age;
    }
    if (array[i].age < ageLowest) {
      ageLowest = array[i].age;
    }

    ageTotal += array[i].age;
  }
  let result = {
    score: {
      highest: scoreHighest,
      lowest: scoreLowest,
      average: scoreTotal / array.length,
    },
    age: {
      highest: ageHighest,
      lowest: ageLowest,
      average: ageTotal / array.length,
    },
  };

  return result;
}
console.log(CalculateStudentData(students));

/* ------------------------------- 2.EXERCISE ------------------------------- */
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(product, qty) {
    let item = {
      product: product,
      qty: qty,
      subtotal: product.price * qty,
    };

    this.products.push(item);
    this.total += item.subtotal;
  }

  showTotal() {
    console.log("Total saat ini: " + this.total);
    return this.total;
  }

  checkout() {
    let result = {
      total: this.total,
      products: this.products,
    };

    return result;
  }
}
let apple = new Product("Apple", 5000);
let orange = new Product("Orange", 4000);

let transaction = new Transaction();

transaction.addToCart(apple, 2);
transaction.addToCart(orange, 3);

transaction.showTotal();

console.log(transaction.checkout());
