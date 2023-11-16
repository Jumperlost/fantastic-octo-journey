let arrNumber = [];
for (let i = 1; i <= 20; i++) {
  arrNumber.push(i);
}

//1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
let filterNum = arrNumber.filter((num) => num >= 10 && num <= 20);
console.log(filterNum.join(","));

// 2 Вивести квадрати чисел від 10 до 20.
let squaresNum = filterNum.map((num) => num ** 2);
console.log(squaresNum);

//3 Вивести таблицю множення на 7.
let arr2 = [];
for (let q = 1; q <= 7; q++) {
  arr2.push(q);
}

let mul = arr2.map((num) => num * 7);
console.log(mul);

//4 Знайти суму всіх цілих чисел від 1 до 15.
function isInteger(num) {
  return Number.isInteger(num);
}
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let whNum = arr3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(whNum);

//5 Знайти добуток усіх цілих чисел від 15 до 35.

let arr4 = [];
for (g = 15; g <= 35; g++) {
  arr4.push(g);
}
console.log(arr4);
let prodNum = arr4.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);
console.log(prodNum);

//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let arr5 = [];
for (o = 1; o <= 500; o++) {
  arr5.push(o);
}
console.log(arr5);

let averageNum = arr5.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
averageNum = averageNum / 500;
console.log(averageNum);

//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.
let couplesNum = 0;
for (let num of arr5) {
  couplesNum += num >= 30 && num <= 80 && num % 2 === 0 ? num : 0;
}
console.log(couplesNum);

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let multiplesNum = arr5.filter(
  (num) => num >= 100 && num <= 200 && num % 3 === 0
);
console.log(multiplesNum.join(","));

//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let naturalNum = 64;

for (let x = 1; x <= naturalNum; x++) {
  if (naturalNum % x === 0) {
    console.log(x);
  }
}

//10 Визначити кількість його парних дільників.

for (let x = 0; x <= naturalNum; x++) {
  if (naturalNum % x === 0 && x % 2 === 0) {
    console.log(x);
  }
}

//11 Знайти суму його парних дільників.

let sumNub = 0;
for (let x = 1; x <= naturalNum; x++) {
  if (naturalNum % x === 0 && x % 2 === 0) {
    sumNub += x;
  }
}
console.log(`Сума парних дільників  ${naturalNum} дорівнює ${sumNub}`);

//12 Надрукувати повну таблицю множення від 1 до 10.

for (let m = 1; m <= 10; m++) {
  for (let n = 1; n <= 10; n++) {
    console.log(`${m} * ${n} = ${m * n}\n`);
  }
}

//13 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let h = 20; h <= 30; h += 0.5) {
  console.log(h);
}

//14 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let priceDol = 27;
for (let k = 10; k <= 100; k += 10) {
  console.log(`${k} * ${priceDol} = ${k * priceDol}\n`);
}

//15 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

N = 18;
for (let p = 1; p <= 100; p++) {
  let numOfPar = p ** 2;
  if (numOfPar <= N) {
    console.log(p);
  }
}

//16 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
function isPrime(num) {
  for (let q = 2; q < num; q++) {
    if (num <= 1) {
      return false;
    }
  }

  for (let q = 2; q <= Math.sqrt(num); q++) {
    if (num % q === 0) {
      return false;
    }
  }
  return true;
}

function printPrimesInRange(start, end) {
  for (let q = start; q <= end; q++) {
    if (isPrime(q)) {
      console.log(q);
    }
  }
}
printPrimesInRange(1, 100);
//17 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function canGetByPowerOfThree(number) {
  let base = 7;
  let exponent = 1;

  while (base ** exponent <= number) {
    if (base ** exponent === number) {
      return true;
    }
    exponent++;
  }
  return false;
}

let numberCheck = 76;
if (canGetByPowerOfThree(numberCheck)) {
  console.log(
    `${numberCheck} можна отримати зведенням числа 7 у деякій степень `
  );
} else {
  console.log(
    `${numberCheck} не можна отримати зведенням числа 7 у деякій степень`
  );
}
