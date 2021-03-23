//while문 사용시 시작값이 중요합니다. 해당 큰 while문 밖에 있으면
//처음에 한번은 작동하지만, 다시 큰 while문 작동시 작은 while문은
//시작값을 인식하지 못하여 작동하지 않습니다. (do~while문도 동일함)
// 구구단 3단 부터 5단 까지 for, while 문을 결합해서 만들기
let i = 3;
while (i < 6) {
  for (let j = 1; j < 10; j++) {
    let result = i * j;
    //document.write(i + "*" + j + "=" + result + "<br>");
  }
  i++;
}
for (let k = 3; k < 6; k++) {
  let l = 1; // 변수를 반복문 안에 넣어야함
  while (l < 10) {
    let result = k * l;
    // document.write(k + "*" + l + "=" + result + "<br>");
    l++;
  }
}
/*
     do~while, for문을 결합하여 만들기
     345678
     456789
     5678910
     3부터 +1만큼 늘어남
     */

let m = 3; // 3부터 계산 시작
let o; // 계산하는 변수
do {
  for (let n = 0; n < 6; n++) {
    //0부터 총 6개의 숫자(3,4,5,6,7,8)
    o = m + n;
    document.write(o);
  }
  document.write("<br>");
  m++;
} while (m < 6);
