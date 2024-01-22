//SET
/*set=new Set("apple","banana")
console.log(set)
a=new Set(["apple","banana"])
console.log(a)
a.add("apple")
a.add("mango")
console.log(a)
//for of
for (value of a) {
    console.log(value)
}
//for in
for (key in a){
    console.log(key)
}*/
//MAP
mapEg=new Map([
    ["id","21ECR045"],["name","deepika"],
])
console.log(mapEg)
//for of
for (value of mapEg){
    console.log(value)
}
//for in
for (val in mapEg){
console.log(val)
}
console.log(mapEg.has("id"))
console.log(mapEg.has("name"))
console.log(mapEg.get("id"))
console.log(mapEg)
//add
mapEg.set("phone","997907707")
mapEg.set("gender","female")
console.log(mapEg)
//remove
mapEg.delete("phone","997907707")
console.log(mapEg)
