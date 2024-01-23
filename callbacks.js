//call back
/*function ramuSomu(welcomeMessage,callback){
setTimeout(function(){
    console.log(welcomeMessage)
    callback()
},2000)
}
function MiniAni(){
    console.log("Odi Poiru vanthudatha da thambhi!!!")
}

ramuSomu("Hello RAmu and Somu\nWelcome to KEC",MiniAni)
*/
//form submission f=example
function submitform(buttonClick,db){
    setTimeout(function(){
console.log(buttonClick)
db();
    },2000
)}


function database(){
console.log("Form submitted Successful")
}
submitform("Form submit button clicked",database)