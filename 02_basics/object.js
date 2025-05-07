//object literals
//to use symbol
const mysym=Symbol("key1")
const jsuser={
    name:"rudra",
    age:19,
    location:"tumkur",
    email:"rudra@gmail.com",
    isloggedin:false,
    lastloggedin:["saturday","monday"]
    [mysym]="mykey1"
}
//to access object 
console.log(jsuser.name)
console.log(jsuser[name])//it is proper  method
//to access key
console.log(jsuser[mysym])
Object.freeze(jsuser)//yeah changes nahi karne deta object meh
jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting())
jsuser.metting=function(){
    console.log('hello js user, ${this.name}');
}
console.log(jsuser.metting())
