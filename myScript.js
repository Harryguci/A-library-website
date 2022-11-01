function applyActiveButton(currentStatus) {
  var list_button = document.getElementsByClassName("right-side-but");
  var i;
  for (i = 0; i < list_button.length; i++) {
    list_button[i].className = list_button[i].className.replace(/ active/g, "");
  }
  list_button[currentStatus].className =
    list_button[currentStatus].className.concat(" active");
  $(".frame-login h3").fadeOut(400);
  setTimeout(function () {
    if (currentStatus == 1) {
      document.querySelector(".frame-login h3").innerHTML = "Sign Up";
    } else {
      document.querySelector(".frame-login h3").innerHTML = "Login";
    }
  }, 600);

  $(".frame-login h3").fadeIn(400);
}
function applyActiveType(current) {
  var list = document.getElementsByClassName("typePersonButton");
  var i;
  for (i = 0; i < list.length; i++) {
    list[i].className = list[i].className.replace(/ active/g, "");
  }
  list[current].className = list[current].className.concat(" active");
  if (current == 1) {
    document.getElementsByClassName("typeLoginSpan")[0].innerHTML = "Admin";
  } else document.getElementsByClassName("typeLoginSpan")[0].innerHTML = "User";
}
