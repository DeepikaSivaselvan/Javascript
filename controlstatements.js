//for loop
sum=0
for(var i=0;i<10;i++){
    sum+=i
}
console.log(sum)

//while
i=0
while(i<10){
    sum+=i
    i++
    
}
console.log(sum)

//do...while
i=0
do{
    sum+=i
    i++
}while(i<10);
console.log(sum)
//example 1
a=[1,2,3,4]
console.log(a.length)
for(var i=0;i<a.length;i++){
    console.log(a[i])
}
// example 2
a=[1,2.2,true,false,"hi","hello"]
console.log(a.length)
for(var i=0;i<a.length;i++){
    console.log(a[i])
}
//for in loop
b=[1,2.2,true,false,"hi","hello"]
for(const index in b){
    console.log("the value present in",index,"is",b[index])
}

//for of,for each to acces elements
//for of loop
for (const value of b){
    console.log(value)
}
//for each loop
b.forEach(value=>{
    console.log(value)
    
});

var customerDetails={}
customerDetails["id"]="21ECR000"
customerDetails["name"]="samantha"
customerDetails["age"]="38"
// for in eg => o/p =key
for (key in customerDetails){
    console.log(key,customerDetails[key])
}
//for each eg
//customerDetails.forEach((key,element)=>)
