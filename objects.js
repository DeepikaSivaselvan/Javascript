//How will you declare objects.
 //1st way
 var customerDetails={
    "name":"Deepika",
    "age":20,
    "phone":"9360169090"
 }
 console.log(customerDetails)
 //adding
 customerDetails["id"]="21ECR045"
 console.log(customerDetails)
 //key doesnt have quotes in o/p as it is inbuiltly present
//2nd way
var customerDetails={}
customerDetails["id"]="21ECR000"
customerDetails["name"]="samantha"
customerDetails["age"]="3v8"
console.log(customerDetails)
//3rd way
console.log(customerDetails.name)
console.log(customerDetails["age"])