//call back
function ramuSomu(welcomeMessage,callback){
setTimeout(function(){
    console.log(welcomeMessage)
    callback()
},2000)
}
function MiniAni(){
    console.log("Odi Poiru vanthudatha da thambhi!!!")
}

ramuSomu("Hello RAmu and Somu\nWelcome to KEC",MiniAni)