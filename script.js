
let rst = document.querySelector(".result")
let btn = document.querySelector(".btn")
let inp = document.querySelector(".inp")

btn.addEventListener("click", async function() {
    let api = await fetch(`https://api.genderize.io/?name=${inp.value}`)
    let data = await api.json()
    rst.innerText = data.gender;
    
})
