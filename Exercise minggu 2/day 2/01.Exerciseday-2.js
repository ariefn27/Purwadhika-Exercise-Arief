const prompt = require("prompt-sync")();

let itemName = prompt("shrimp crackers: ");
let price = parseFloat(prompt("10000: "));
let isMember = prompt("Apakah kamu member? (1 = ya, 2 = tidak): ");

let taxRate = 0.05;
let discountRate = 0.15;

let discountAmount = 0;
if (isMember === "1") {
  discountAmount = price * discountRate;
}

let taxAmount = price * taxRate;
let finalTotal = price + taxAmount - discountAmount;

console.log("\n===== RECEIPT =====");
console.log(`Item       : ${itemName}`);
console.log(`Base Price: ${price}`);
console.log(`Tax        : ${taxAmount}`);
console.log(`Discount   : ${discountAmount}`);
console.log("-------------------");
console.log(`Total      : ${finalTotal}`);

if (isMember === "1") {
  console.log("Status     : Discount Member Applied");
} else {
  console.log("Status     : Gabung menjadi member kita 😉");
}
