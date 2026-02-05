/* ----------------- 1. MENCARI TINGGI SEGITIGA DAN PERSEGI ----------------- */

function triangle(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

triangle(5);

function rectangle(height, width) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= width; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

rectangle(4, 6);

/* -------------- 2. Fizbuzz fungtion Loop from 1 to n and replace ------------- */

function replace(n) {
  let array = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }

  return array;
}

console.log(replace(15));

/* ------------------- 3. BMI kalkulator weight on height ------------------- */

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}
console.log(calculateBMI(95, 175));

/* -- 4.function to remove all odd numbers in an array and return a new array - */

function removeOdd(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* --------------------------------- 5. Write a function to split a string and convert it into an array of words-------------------------------- */

function splitString(text) {
  let result = [];
  let word = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      result.push(word);
      word = "";
    } else {
      word = word + text[i];
    }
  }
  result.push(word);
  return result;
}
console.log(splitString("Hello World"));
