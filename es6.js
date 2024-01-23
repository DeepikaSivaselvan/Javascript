//ES6 -> ECMA Script 6 standard
//1.var,let,const =>refer variable.js
//2. Arrow Function
var fun = ()=>{
    console.log("Hello")
}
fun()


//3.Destructuring Operator

var arr=[10,20,30,40,50]
var a,b,c,d,e=arr
console.log(a,b,c,d,e)

var arr=[10,20,30,40,50]
var [a,b,c,d,e]=arr
console.log(a,b,c,d,e)
//4.spread Operator
var array=[10,20,30,40,50]
var arr1=[...array,60,70]
console.log(arr1)


//task:arrow function
//call back
submitform=(buttonClick,db)=>{
    setTimeout(()=>{
console.log(buttonClick)
db();
    },2000
)}


 database=()=>{
console.log("Form submitted Successful")
}
submitform("Form submit button clicked",database)

//promise
isAuthenticated=()=> {
    return Math.random() < 1;
  }
  Login=()=> {
    return new Promise( (response, noresponse)=> {
      setTimeout(()=> {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then( (message)=> {
      console.log(message);
    })
    .catch( (message)=> {
      console.log(message);
    });

//async await
const commentcode=async()=> {
    return new Promise(
(commentValue)=>{
    setTimeout(()=> {
        commentValue("this is my first post's Comment icon")
    }, 1000);

}
    )
}
const likeCode=async()=> {
    return new Promise(
        (likeValue)=>{
            setTimeout( ()=> {
                likeValue("this is my first post's like icon")
            }, 1000);
        
        }
    )
}
const post=async()=> {
    let post = new Promise(
        (postResponse)=>{
            setTimeout(()=> {
                postResponse("this is my first post")
            }, 1000);
        }

    );
    var[feed,comment,like]=await Promise.all([post,commentcode(),likeCode()])
    console.log(feed)
    console.log(comment)
    console.log(like)
    //console.log(await post)
    //console.log(await commentcode())
   // console.log(await likeCode())

}
post()

