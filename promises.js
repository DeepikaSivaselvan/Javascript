//promises
/*function maatikita(){
  return 0;
}
function ramuSomu(){
    return new Promise(function(thambhiPoidu,unthalavithi){
        setTimeout(function(){
            if(maatikita()){

                unthalavithi("thappichita");
            }
            else{
                thambhiPoidu("Odi Poiru vanthudatha da thambhi!!!");
            }
        },2000);
        

    });
}  
ramuSomu().then()

//example2
function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });
*/


function isLocationvalid(loc) {
    var v = "america"
    if(v==loc){
        return true;
    }
    else{
        return false
    }
}
function location() {
    return new Promise(function(response,errormsg){
        setTimeout(function () {
            console.log(loc)
            if (isLocationvalid(loc)) {
                return respond("Location found ");
            }
            else {
                return errormsg("Location not found ");
            }
        }, 2000)
    }
    )
}

location().then(
    function (respond) {
        console.log(respond)
    }
)