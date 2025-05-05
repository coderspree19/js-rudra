const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["spiderman","flash","batman"]
/*marvel_heros.push(dc_heros)//problem array ka andar array bana deta hai
console.log(marvel_heros)
console.log(marvel_heros[3][1])
const allheros= marvel_heros.concat(dc_heros)//isme kuch issue nahi hai
console.log(allheros)*/
//mostly spread operator use kiya jata hai
const allnewheros=[...marvel_heros,...dc_heros]//iska faida yeh hai tum multiple arrays ko concat kar sakte ho
//console.log(allnewheros)
const anotherarr=[1,2,3,[4,5,6],7,[8,9,10]]
const realanotherarr=anotherarr.flat(Infinity)
//console.log(realanotherarr)
console.log(Array.from("Rudra"))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))