let input ="swOs"
let output1 = input.split("")
let output2 = output1.map((value,i) =>{if(i ===0)
{return value.toUpperCase()}
else{return value.toLowerCase()}
})

let output =output2.join("")
console.log(output)
