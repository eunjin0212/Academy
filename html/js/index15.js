// for (let i = 10; i > 0; i--) {
//     // console.log(i);
//   }
//   let num = 0;
//   for (let j = 5; j <= 20; j++) {
//     num = j + num;
//   }
//   // console.log(num);

//   let result;
//   let a = 0;
//   const num3 = 5;
//   for (let k = 1; k < 10; k++) {
//     result = num3 * k;
//     a = result + a;
//     console.log(a);
//   }
//   //do~while, if 11~50까지 숫자 중 짝수값만 모두 합한 결과
//   let d = 11;
//   let e = 0;
//   do {
//     if (d % 2 == 0) {
//       e = e + d;
//     }
//     d++;
//   } while (d <= 50);

let a = 5;
let b;
let c = "";
while (a > 0) {
  if (a > 1) {
    b = a + ",";
  } else {
    b = a;
  }
  c = c + b;
  a--;
}
console.log(c);

for (let i = 5; i < 8; i++) {
  for (let j = 1; j < 5; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

let count = 0; //6개
for (let k = 1; k < 10; k++) {
  for (let l = 2; l < 10; l++) {
    let d = k * l;
    if (d >= 60) {
      count = count + 1;
    }
  }
}
console.log(count + 1);
