// Code your solutions in this file



//assignment
const arr = ['maryam','salah','sh']
function writeCards(arr){
    let newArr=[]
for (let i=0 ; i<arr.length ; i++){
    newArr.push(`Thank you ,${arr[i]} for the wonderful surprise gift!`)
    debugger
}
return newArr
}
writeCards(arr)



//count down while

function countDown (){
    let count = 10

while (count > -1) {
  console.log(count--);
}}