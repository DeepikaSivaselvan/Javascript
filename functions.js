//Function -->9without arguement
function fun(){
    console.log("Function Sample")
}
fun()
//Function -->with arguement and without return type
function fun(a,b){
    console.log("Function with arguement")
    for (var i=a;i<b;i++)
    {
    if(i%2==0){
        console.log("the no",i,"is even")
    }
    else{
        console.log("the no "+i+" is odd")
    }
}
}
fun(1,6)
//function -->with arguement and return type
function sum(a,b){
    return a+b
}

console.log(sum(1,2))
//function-->without arguement and return type
function d(a,b){
    var a=10
    var b=16
    return a+b
}
console.log(d())