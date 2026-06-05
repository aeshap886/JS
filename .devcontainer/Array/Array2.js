const marvel_heros =["thor","Ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros [3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

 const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros)

// Converts nested arrays into a single-level array   

 const another_arr = [1, 2, 3, [4, 5, 6], 7 ,[6, 7 ,[4, 5]]]
// const real_another_arr = another_arr.flat(Infinity) // flatten nested arrays
// console.log(real_another_arr); 

 
console.log(Array.isArray("Aesha"))

console.log(Array.from("Aeshu"))

console.log(Array.from({name: "Aesha"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 ,score3));