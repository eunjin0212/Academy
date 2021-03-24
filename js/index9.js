function clickHandle() {
  let pass = form.password.value;
  // pass2 랑 같은 방법
  // 단, form이 있어야 하고 name=''이 있어야 한다.
  // input의 name과 form의 name은 달라도 가능
  if (pass === "") {
    alert("패스워드를 입력하세요.");
  }
}

function click() {
  let pass2 = document.getElementById("id").value;
  if (pass2 === "") {
    alert("패스워드를 입력하세요.");
  }
}
