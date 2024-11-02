let food = [
{id: 1, name: "burger" , price: 1200},
{id: 2, name: "pasta" , price: 1000},
{id: 3, name: "pizza" , price: 800},
{id: 4, name: "shawarma" , price: 300},
]
let newarray = food.slice(1,3)
console.log(newarray)

food.splice(0 , 2 , {id: 1, name: "wings" , price: 1200},)
console.log(food)

// getting price of object greater than 800 price using terniary operator

let newarr = food.map((x)=> 
  x.price > 800 ? console.log(x.price):"")

// anathoer way of getting price of object greater than 800 using combine method

let greater = food.filter((x)=>x.price>800)
let nevi = greater.map((x)=>x.price)
console.log(`the food having price greater than 800 is ${nevi}`)

// getting object greater than 800 price using filter
// object and statement words never come in same console using ``

let newy = food.filter((x)=>x.price>800)
console.log("The food having price greater than 800 is: ") 
console.log(newy)

// printing id === 3 using ternary operator

  let newarri = food.map((x)=> 
  x.id == 3 ? console.log(x.id):"")

// anotherway of printing id === 3

  let neww = food.filter((x)=>x.id===3)
  let abc = neww.map((x)=>x.id)
  console.log(abc)

// finding object having id === 3

let arry = food.find((x)=>x.id === 3)
console.log(arry)