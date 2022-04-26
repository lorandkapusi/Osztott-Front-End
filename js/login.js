var form = null; 
var error = []; 

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
    $("email_err").style.display = "none";
    $("passwd_err").style.display = "none";
    
  }
  
  var fun = {
    email: checkEmail,
    password: checkPassword,
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
      return false
    }

    window.location = "./form.html";
    return true;

  }

  //inicializálás
  window.onload = function () {
    $("urlap").addEventListener("submit", checkForm, true);
  }