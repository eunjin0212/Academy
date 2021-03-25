function telP() {
  document.getElementById("tel").value = document.getElementById("cp").value;
}

function emailFunc(value) {
  let email = document.getElementById("email");
  if (value === "my") {
    email.readOnly = false;
  } else {
    email.value = value;
    email.readOnly = true;
  }
}
