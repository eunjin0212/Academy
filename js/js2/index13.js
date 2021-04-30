//배열(array) 형태는 [], {}, { [] }, [ { [] }]
const data = ["홍길동", "이순신", "강감찬", "유관순"];

let array = data.length; //배열 개수

//console.log(array);

//console.log(data[0],data[1],data[2],data[3]);   //배열출력 사항
let f;
for (let i = 0; i < array; i++) {
  console.log(a[i]);
}

const obj = { number: ["5", "4", "3", "2", "1"] };
//object-key배열이며, 키를 이용해서 배열 그룹을 나눌 수 있습니다.
//console.log(obj.number[0],obj.number[3]);
obj.number.forEach(function (b1, b2, b3) {
  //forEach = each : 기존 반복문은  ++,--,종료값으로 구분 하지만
  //forEach는 배열에서 사용하는 반복문
  console.log(b3);
  //b1 : 배열의 값을 가져오는 함수값
  //b2 : 배열의 노드 값으로 표현합니다.
  //b3 : 배열 전체 구조형태를 가져 옵니다.
});
