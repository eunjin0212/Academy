for (let i = 50; i > 0; i--) {
  console.log(i);
  if (i % 2 === 1) {
    document.write(i + " ");
  }
}
const a = 8;
for (let i = 9; i >= 1; i--) {
  console.log(i);
  document.write(`${a} * ${i} = ` + i * a + "<p>");
}
let x;
for (let i = 7; i >= 3; i--) {
  for (let j = 9; j >= 1; j--) {
    console.log(i, j);
    document.write(`${i} * ${j} = ` + i * j + "<p>");
  }
}
for (let i = 1; i < 6; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
for (let i = 1; i < 6; i++) {
  // 줄
  for (let j = 6; j > i; j--) {
    // 별
    document.write("*");
  }
  document.write("<br>");
}
for (let k = 5; k > 0; k--) {
  for (let g = 1; g <= k; g++) {
    document.write("*");
  }
  document.write("<br>");
}

// 응용문제4
// 1~100까지의 합을 구하시오 for문, 또는 while 둘중에 하나를 사용하시면 됩니다.
// 1+2+3+4+5+6+7+8~~~+100 = 5050
// 더블 for문(X)

let a = 1;
let b = 0;
while (a < 101) {
  b = b + a;
  a++;
}
document.write(b);

/* 응용문제 4-1 for문 제작 */
let aa;
let bb = 0;
for (aa = 1; aa <= 100; aa++) {
  bb = bb + aa;
}
document.write(bb);

// 응용문제 4-2 while문으로 다음 문제를 풀어보시오
// 1~5까지 모두 곱한 결과값을 출력하시오

let zz = 1;
let hh = 1;
while (zz <= 5) {
  hh = hh * zz;
  zz++;
}
document.write(hh);
