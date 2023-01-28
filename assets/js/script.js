
let mail = document.getElementById("sourav");
let button = document.getElementById("butt");
let flag = 0;
button.addEventListener('click', function (e) {
    e.preventDefault();
    flag = 0;
    let main_mail = mail.value;
    ValidateEmail(main_mail);
    if (!flag) {
        let vall = document.getElementById("vall");
        vall.classList.add("not-valid");
        vall.classList.remove("valid");
    }
    else {
        let vall = document.getElementById("vall");
        vall.classList.add("valid");
        vall.classList.remove("not-valid");
    }
})

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
        flag = 1;
      return true;
  
    } else {
  
  
      return false;
  
    }
  
  }








