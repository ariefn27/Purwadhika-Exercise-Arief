/* ------------------------------- 1.Exercise ------------------------------- */

let nums = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(nums) {
  let count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  let limit = nums.length / 2;

  for (let key in count) {
    if (count[key] > limit) {
      return Number(key);
    }
  }
}

console.log(majorityElement(nums));

/* ------------------------------- 2.Exercise ------------------------------- */
function romanToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = roman[s[i]];
    let next = roman[s[i + 1]];

    if (next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

/* ------------------------------- 3. Exercise ------------------------------ */
function generate(numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }

    result.push(row);
  }

  return result;
}
console.log(generate(5));
console.log(generate(1));

/* ------------------------------- 4.Exercise ------------------------------- */

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
