//1.asyn dummy eg
/*async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                console.log("Example of async/await")
            }, 1000);
        }
    );
    console.log(await promise)
}
asAw();
*/

//2.kind of our own insta
async function commentcode() {
    return new Promise(
function(commentValue){
    setTimeout(function () {
        commentValue("this is my first post's Comment icon")
    }, 1000);

}
    )
}
async function likeCode() {
    return new Promise(
        function(likeValue){
            setTimeout(function () {
                likeValue("this is my first post's like icon")
            }, 1000);
        
        }
    )
}
async function post() {
    let post = new Promise(
        function (postResponse) {
            setTimeout(function () {
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