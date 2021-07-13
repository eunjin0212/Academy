# Hello Pet Mobile 
_2021. 06. 30 Middle Test_
👉 [Hello Pet 기획서]('https://github.com/eunjin0212/Academy/tree/master/m_hellopet/proposal')

## ✅ Making

> ### 만든 방법 및 스크립트 언어
> - JavaScript : 1%
> - Html : 33%
> - Scss : 30%
> - Jquery : 30% (+ AJAX)
> - JSON : 2% 

> ### 참여도
> - Image, Design, StoryBoard, JSON Data 를 제외한 나머지 참여

> ### 걸린 시간 
> * 정확한 시간 체크 X, 대략 12시간 정도
> > - Publising 70%
> > - script 30%

## ✅ Function

### Jquery
 > **Side Menu**
 > - 메뉴 버튼 클릭 시 사이드 메뉴 Open. 이때 스크롤 동작X.
 > - black screen 클릭 시 메뉴 Close.
 > - QnAa 게시판 JSON 데이터에서 추출. (글자 수 초과 시 "..." 으로 자르기).
 >
 > **Floor Button** 
 > - 각 디바이스 스크린 크기를 구해 Floor Button의 위치 선정.
 > - 클릭 시 맨 위 top으로 이동.
 >
 > **Header**
 > - Main Banner Fade 효과로 변화주기.(Toggle)
 > - Search 버튼 클릭 시 Search Bar Open.
 >
 > **Main**
 > - New pet Section JSON 강아지와 고양이로 데이터를 나누어 추출.
 > - CAT, DOG 클릭 시 강아지 고양이 분리 되어 화면에 나열.
 > - Best Product JSON 데이터 추출 후 표현.
 >
 > **Footer**
 > - Review JSON 데이터 추출 후 부모 엘리먼트에 추가 하고, 글 자수 초과 시 자르기.
 > - 4초 마다 리뷰가 Rolling 되어 계속 반복 실행. 

### JavaScript
 > **Not a Mobile**
 > - Window의 Width 값이 변하면 넓이를 구해 Mobile 크기에 맞지 않으면 경고 화면을 띄움.
 >
 > **Search Bar**
 > - 겁색창에 엔터키를 누르면 alert 메세지 출력.

### SCSS
 > **Basic.scss** 
 > - 기본 세팅, 또는 자주 쓰는 속성들을 `placeholder선택자`와 `@mixin`으로 묶음.
 > **index.css**
 > - 파일 나누기를 통해 코드 가독성을 높임.


✔ Scss 수정사항
1. 중첩된 속성 써서 바꾸기
font-, margin- 등과 같이 동일한 네임 스페이스를 가지는 속성들을 다음과 같이 사용할 수 있음.
```css
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    bottom: 40px;
    right: 30px;
  };
}
```
2. 자주 쓰는 속성 $변수로 만들기
3. 파일 분할 이용 [참고]('https://heropy.blog/2018/01/31/sass/')

## ✅ 이후에 시도해 볼 것

1. 회원가입 페이지 (StoryBoard 필요)
2. Jquery > Javascript 변환
3. Javascript > Typescript or ReactJs or Vue.Js 변환⭐
