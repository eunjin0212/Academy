# Vue : 사용자 인터페이스를 만들기 위한 프로그레시브 프레임워크

## Vue 사용해보기

> - Vue 엔진 https://cdn.jsdelivr.net/npm/vue > min.js
> - Safari는 3.X 이상버전 사용해야 Vue 정상작동 가능
> - CDN설치 : url로 해당 코드 로드하여 출력하는 형태
> - CLI설치 : APP개발시 CLI로 제작

### Vue 기본 세팅

_[참고](index.html)_

> ```Vue
> let vue = new Vue({
>       // Vue 실행
>   el: "#Object" // 객체 선택부분 id, class, element 선택
>   data: { // 인스턴스 출력
>       variable: '출력',
>        // 가상 변수를 만들어서 출력
>   }
>   methods: { },
>   components: { },
>   computed: { },
> })
> ```

### Vue attribute

_[참고](index2.html)_

> - v-bind : 속성값을 정함
> - v-model : value 속성
> - v-bind:value = v-model
> - v-text : innerText
> - v-html : innerHTML
>
> ```Vue
> // 예제
> <div v-bind:style='color: red'>
>     <input v-bind:type='text' v-model='input box' />
> </div>
> ```

### Vue Methods

_[참고](index3.html)_

> - v-on:click = onclick
> - v-on:change = onchange
> - v-on:submit = onsubmit
> - ref : Vue 에서 사용하는 임시 element
> - checked는 value값으로 검사
>
> ```Vue
> const vue = new Vue({
>   // vue 안에 변수 사용X
>   el:'',
>   data:{},
>   methods:{
>       // 행동 + 이벤트 처리 부분
>       // methods안에는 변수를 못 쓴다. vue밖에 써서 데려와야한다.
>       eventFunc: function(){
>           // eventFunc: function() {} = eventFunc() {}
>       }
>   }
> })
> ```

### Vue Handling

_[참고](index4.html)_

> - 전역변수를 data 인스턴스 값으로 변환
>
> ```Vue
> <div id="vuebox">
>     <span id="msg">{{ dataview }}</span>
>     <button v-on:click="aaa">{{btn}}</button>
> </div>
> <script>
>   let data1 = 60
>   let data2 = 222
>   let vue = new Vue({
>     el: '#vuebox',
>     data: {
>       dataview: null, // default 값에는 빈 값(null) 적용
>       // val1: 5,
>       // val2: 6,
>       val1: data1, // 전역변수 대입
>       val2: data2,
>     },
>     methods: {
>       aaa: function () {
>         this.dataview = data1 * data2
>         // 전역변수를 vue애 data 인스턴스 값으로 변환하여 사용
>         this.dataview = this.val1 + this.val2
>       },
>     },
>   })
> </script>
> ```

### Vue 조건문

_[참고1](index7.html)_
_[참고2](index8.html)_

> - v-if, v-else, v-else-if : 조건부 랜더링, default -> true, false
> - v-if는 함수에 인자값을 사용해 컨트롤한 js와 달리 인자값 없이도 if문으로 사용이 가능
> - 논리 연산자(&&, ||) 를 이용해 v-if문에 조건을 추가 가능(여러개도 가능), 확장성있는 v-if조건을 제작할 수 있음

### Vue 반복문

_[참고 (1차 배열)](index15.html)_
_[참고 (2차 배열)](index16.html)_

> - v-for="(test,key,index) in Array" : jq each
> - v-for="(name,index) in Array" : js for in
> - test : Array 배열
> - key : 배열에 등록된 각각의 key
> - index : 배열의 키 번호
> - 자리는 정해져 있음 하나만 뽑고 싶다면 세 개를 다 가져와서 한 개만 출력 시키는 방법을 써야함

### Vue 애니메이션

_[참고](index21.html)_

> - leave효과 : 없어질 때. false
> - enter효과 : 나타날 때. true
> - transition : vue전용 태그 : class, id를 이용해 style에 애니메이션을 사용하지 않음

### Vue components

> #### 내장 template
>
> _[참고](index23.html)_
>
> ```
> components: {
>       //html 재사용 태그를 보다 쉽게 적용하기 위한 사용자 지정 엘리먼트
>       elementname: { template: "<span class='span'></span>" },
>       // 해당 태그 기준으로 template를 이용하여 정규화 태그명으로 변화시킴.
>       apple: { template: "<input type='text' id='mid' value='' />" },
>       // ref, value 를 여기다 쓰면 값 못갖고옴, html보다 늦게 읽히기 때문.
>
> },
> ```

> #### 외장 components
>
> _[참고](index24.html)_
>
> - 전역 컴포넌트 Vue.component(tagName, options)
>
> ```
> <abc v-bind:aaa="msg"></abc>
> <script>
> Vue.component("tagName", {
>     props: ["attr"], // props : 속성값 가져오는 부분
>     // data msg 에서 가져온 애를
>     // new Vue 의 data에서 msg를 찾음
>     template: "<button @click='func' v-model='btn_text'>{{text}}</button>",
>     data() {
>     // 내부 Vue data: { }랑 틀림
>         return { btn_text: "클릭", text: "체크" };
>     // return 으로 값을 반환하는 그냥 함수 일 뿐! return은 한 개만!
>     },
>     methods: {
>     // 외부 컴포넌트에 사용할 수 있는 핸들링 부분
>         func: function () {
>           alert("외부 test");
>         },
>     },
> });
> </script>
> ```

### Vue 응용

- [input 입력 값 이용](index5.html)
- [input 입력 값 + v-on:click 매개변수](index6.html)
- [v-if로 이미지 출력](index9.html)
- [v-on:click + Array (좌우로 넘어가는 News만들기)](index10.html)
- [select 값을 바로 출력](index11.html)
- [checkbox, radio + Vue](index12.html)
- [select + Vue](index13.html)
- [methods function을 이용해 html 출력](index14.html)
- [Vue + Array + Splice](index17.html)
- [Array + slice, push, split, splice, shift](index18.html)
- [Array + Vue 도로 상황 출력](index19.html)
- [Vue return 함수 파라미터](index20.html)
- [Vue 게시판 editor](index22.html)
- [Vue](index13.html)
- [Vue](index13.html)
- [Vue](index13.html)
- [Vue](index13.html)
