//for < while < do~while

let a = 1; //초기값
while (a < 11) {
  //범위값
  document.write(a + "<br>");
  a++; //증가, 감소
}
/* 응용문제1. while문으로 10~1까지 역순으로 나오는 반복문을 작성하시오 */
let b = 10;
while (b > 0) {
  document.write(b + "<br>");
  b--;
}
/* do~while */
let c = 1; //초기값
do {
  document.write(c + "<br>");
  c++; //증가,감소
} while (c < 11); //범위값

/* 응용문제2.
 구구단 8단 이며 8*1=8 ~ 8*9=72 까지 입니다.
 while문으로 작성 하시오
 */
let d = 8; //8단 기본값
let e = 1; //while에 사용할 초기값
let f; //계산 결과값
while (e < 10) {
  f = d * e; //계산 수식구
  document.write(d + "*" + e + "=" + f + "<br>");
  e++; //증가
}

let g = 1;
while (g < 11) {
  if (g > 5) {
    //while+if 해당 조건에 맞는 부분만 출력하게 됨.
    document.write(g + "<br>");
  }
  g++;
}
/*
     응용문제3.  100~50까지 숫자 역순(내림차순)중 짝수 값만 출력하시오.
     단, while을 이용합니다.
     100, --, %
 */
let h = 100;
while (h >= 50) {
  let i = h % 2;
  if (i == 0) {
    document.write(h + "<br>");
  }
  h--;
}
/* while문으로 별찍기*/
let i = 1; // 줄
while (i < 6) {
  let j = 1; // 별
  while (j <= i) {
    document.write("*");
    j++;
  }
  document.write("<br>");
  i++;
}
