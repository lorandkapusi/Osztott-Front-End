var form = null; 
var error = []; 

function checkFirstName(mezo) {
 var re=/[A-Z][a-z]*/;
  if (!re.test(mezo.value)) {
    error.push(mezo.name);
    $("fname_err").style.display = "inline";
  }
}
function checkLastName(mezo) {
    var re=/[A-Z]+([ '-][a-zA-Z]+)*/;
     if (!re.test(mezo.value)) {
       error.push(mezo.name);
       $("lname_err").style.display = "inline";
     }
   }

   function checkEmail(mezo) {
    var re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!re.test(mezo.value)) {
      error.push(mezo.name);
      $("email_err").style.display = "inline";
    }
  }

  function checkPassword(mezo) {
    var re = [
      /\d/, 
      /[a-z]/, 
      /[A-Z]/, 
      /^.{8,}$/,
    ];
  
    for (var i = 0; i < re.length; i++) {
      if (!re[i].test(mezo.value)) {
        error.push(mezo.name);
        $("passwd_err").style.display = "inline";
        break;
      }
    }
  }

  function checkAge(mezo){
      if(mezo.value<18){
        error.push(mezo.name);
        $("age_err").style.display = "inline";
      }
  }

function setError(errlist) {
    for (var i = 0; i < errlist.length; i++) {
      var name = errlist[i];
      form[name].nextElementSibling.style.color = "red";
    }
  }
  //hiba törlés
  function cleanError() {
    error = [];
    for (var name in fun) {
      form[name].nextElementSibling.style.color = "inherit";
    }
    $("fname_err").style.display = "none";
    $("lname_err").style.display = "none";
    $("email_err").style.display = "none";
    $("passwd_err").style.display = "none";
    $("age_err").style.display = "none";
  }
  
  var fun = {

    fname: checkFirstName,
    lname: checkLastName,
    email: checkEmail,
    password: checkPassword,
    age: checkAge,
  };
 
  function checkForm(e) {
    form = $("urlap"); 
   
    cleanError(); 
  
    for (var mezo in fun) {
      fun[mezo](form[mezo]); 
    }
    
    if (error.length != 0) {
     
      setError(error);
      e.preventDefault(); 
    }
    return true;
  }
  //inicializálás
  window.onload = function () {
    $("urlap").addEventListener("submit", checkForm, true);
  }