let input = document.getElementById('input')
let img = document.getElementById('img')

input.addEventListener('change' ,() =>{
img.src = URL.createObjectURL(input.files[0])
})

// let inputt = document.getElementById('inputt')
// let imgu = document.getElementById('imgu')
// inputt.addEventListener('change' ,() =>{
// imgu.src = URL.createObjectURL(inputt.files[0])
// })
// let inputtt = document.getElementById('inputtt')
// let imgg = document.getElementById('imgg')
// inputtt.addEventListener('change' ,() =>{
// imgg.src = URL.createObjectURL(inputtt.files[0])
// })