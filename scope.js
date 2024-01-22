//global scope
/*sum=0
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
//Local scope
for(let i=0;i<1;i++){
    console.log(i+2)
    //i can be accessed here only caz of let
}
//console.log(i)
//i can't be accessed outside


for(var i=0;i<1;i++){
    console.log(i+5)
    //i can be accessed outside as well
}
console.log(i+1)
*/
//BLOCK SCOPE
var a=10
console.log(a)
{
    let a=5
    let b=5
    console.log(a)
    console.log(b)
}
console.log(a)
