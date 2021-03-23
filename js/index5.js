// switch~case (설문조사,투표,통신사,지역번호(위치),레벨(등급))
let name = "이순신";
switch (
  name //해당 변수값을 대입합니다.
) {
  case "홍길동": //선택값과 비교하여 동일하면 해당 내용을 출력합니다.
    document.write("가입자 고객 입니다.");
    break; //case와 동일값일 경우 더 이상 조회 하지 않고 정지합니다.

  case "이순신":
    document.write("휴면 고객 입니다.");
    break;

  default:
    //case외에 모든 사항을 default로 정합니다.
    document.write("가입되지 않은 고객입니다.");
    break;
}

let level = 1;
switch (level) {
  case 1:
    document.write("일반 회원 등급 입니다.");
    break;

  case 2:
    document.write("실버 회원 등급 입니다.");
    break;

  case 3:
    document.write("골드 회원 등급 입니다.");
    break;

  case 4:
    document.write("VIP 회원 등급 입니다.");
    break;

  default:
    document.write("비회원 입니다.");
    break;
  //case 20개 이상은 사용하지 않습니다.
}

let payment = "CARD";
switch (payment) {
  case "CARD":
    document.write("신용카드로 결제를 선택했습니다.");
    break;
  case "BANK":
    document.write("무통장입금 결제를 선택했습니다.");
    break;
  case "MOBILE":
    document.write("휴대폰 결제를 선택했습니다.");
    break;
  default:
    document.write("결제를 선택하세요.");
    break;
}

let num = 1;
switch (num) {
  //   case 1:
  //   case 2:
  case (1, 2, 3, 4, 5): //
    document.write("5 이하의 숫자를 입력하셨습니다.");
    break;

  default:
    document.write("5 이상의 숫자를 입력하셨습니다.");
    break;
}
const samsung = "삼성";
const lotte = "롯데";
const hyundai = "현대";
let pay = "dd";
const payment = () => {};
switch (pay) {
  case "card":
    if (samsung || lotte) {
      document.write("결제 진행하겠습니까?");
      console.log("결제");
    } else if (hyundai) {
      document.write("시스템 점검으로 인하여 결제가 되지 않습니다.");
      console.log("현대");
    }
    break;
  default:
    document.write("올바른 값이 아닙니다.");
    console.log("결제 안됨");
    break;
}

// switch + if문 결합 합니다.
// 변수값에 card라는 단어를 입력합니다.
// 하위 if문에 롯데,현대,삼성으로 나누어 집니다.
// 단, 사용자가 현대를 선택할 경우
// "시스템 점검으로 인하여 결제가 되지 않습니다."라는 메세지를 출력하시고,
// 롯데, 삼성을 선택할 경우 "결제 진행 하겠습니까?"라는 메세지를 출력 하십시오.
// 단, card외에 다른 단어를 사용할 경우 "올바른 값이 아닙니다." 라고 메세지를 출력합니다.

let pay = "card1";
let part = "롯데";
switch (pay) {
  case "card":
    if (part != "롯데" || part != "신한") {
      document.write("결제 진행 하시겠습니까?");
    } else {
      document.write("시스템 점검으로 인하여 결제가 되지 않습니다.");
    }
    break;

  default:
    document.write("무통장 입금");
    break;
}

// 응용문제 switch문으로 2단, 4단 출력
// 변수에 문자로 '2단', '4단' 입력시 구구딘 출력
