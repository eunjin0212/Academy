// 1번
for (let i = 10; i > 4; i--) {
  console.log("for" + i);
}

let a = 10;
while (a >= 5) {
  console.log("while" + a);
  a--;
}

let b = 10;
do {
  console.log("doWhile" + b);
  b--;
} while (b > 4);

// 2번
for (let j = 50; j >= 1; j--) {
  if (j % 2 === 1) {
    console.log("for" + j);
  }
}

let c = 50;
while (c >= 1) {
  if (c % 2 === 1) {
    console.log("while" + c);
  }
  c--;
}

let d = 50;
do {
  if (d % 2 === 1) {
    console.log("doWhile" + d);
  }
  d--;
} while (d > 0);

// 3번
for (let k = 7; k >= 3; k--) {
  // 7단부터 3단
  for (let f = 9; f > 0; f--) {
    console.log("for" + k + "*" + f + "=" + k * f);
  }
}

let g = 7;
while (g > 2) {
  let h = 9;
  while (h > 0) {
    console.log("while" + g + "*" + h + "=" + g * h);
    h--;
  }
  g--;
}

let m = 7;
do {
  let n = 9;
  do {
    console.log("doWhile" + m + "*" + n + "=" + m * n);
    n--;
  } while (n > 0);
  m--;
} while (m > 2);

// 4번 별찍기

for (let star = 1; star < 6; star++) {
  for (let line = 0; line < star; line++) {
    document.write("*");
  }
  document.write("<br>");
}

let star1 = 1;
while (star1 < 6) {
  let line1 = 0;
  while (line1 < star1) {
    document.write("*");
    line1++;
  }
  document.write("<br>");
  star1++;
}

document.write("⭐" + "<br>");
let line2 = 1;
do {
  let star2 = 0;
  do {
    document.write("*");
    star2++;
  } while (star2 < line2);
  document.write("<br>");
  line2++;
} while (line2 < 6);

// 5번
for (let line3 = 1; line3 < 6; line3++) {
  for (let star3 = 6; star3 > line3; star3--) {
    document.write("*");
  }
  document.write("<br>");
}

let star4 = 6;
while (star4 > 0) {
  let line4 = 0;
  while (line4 < star4) {
    document.write("*");
    line4++;
  }
  document.write("<br>");
  star4--;
}

let star5 = 5;
do {
  let line5 = 0;
  do {
    document.write("*");
    line5++;
  } while (line5 < star5);
  document.write("<br>");
  star5--;
} while (star5 > 0);

// 6번

let num6 = 6;

for (let num = 1; num < 10; num++) {
  console.log(num6 * num);
}

let numW = 1;
while (numW < 10) {
  console.log(num6 * numW);
  numW++;
}

let numD = 1;
do {
  console.log(num6 * numD);
  numD++;
} while (numD < 10);
