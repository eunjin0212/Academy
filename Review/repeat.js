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
