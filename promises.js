//promises
function maatikita(){
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