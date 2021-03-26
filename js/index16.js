let value;
switch (value) {
  case "korea":
  case "KOREA":
  case "한국":
    location.href = "http://korea.com";
    break;

  case "usa":
  case "us":
  case "미국":
    location.href = "http://usa.com";
    break;

  case "코리아":
  case "아메리카":
    alert("정확한 나라명을 입력하세요.");
    break;

  default:
    break;
}

let a = "5단";
let num;
switch (a) {
  case "5단":
    num = 5;
    break;
  case "8단":
    num = 8;
    break;

  default:
    break;
}

for (let i = 1; i < 10; i++) {
  console.log(num + " * " + i + " = " + num * i);
}
