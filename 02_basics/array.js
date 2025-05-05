//array
const myarr=[0,1,2,3,4,5]
//console.log(myarr[0])//to access an array
const myheros=["ironman","hulk"]//for string
const newarray=new Array(1,2,3,4)//one more type to decleare an array
//array methods
/*myarr.push(6)//array ka andar value add kar deta hai
console.log(myarr)
myarr.pop()//yeah last value of array ko remove kar deta hai
myarr.unshift(9)
console.log(myarr)
myarr.shift()//first value ko hata deta hai
console.log(myarr.includes(9))//pata karne ka liya wo value hai ke nahi array meh
console.log(myarr.indexOf(3))//konse index meh wo value hai
const newarr=myarr.join()
console.log(myarr)
console.log(newarr)
console.log(typeof newarr)
console.log(typeof myarr)*/
//important difference between slice and splice
const my1=myarr.slice(1,3)
console.log("a",my1)
//console.log("b",myarr)
const my2=myarr.splice(1,3)
console.log("c",my2)
console.log("b",myarr)

