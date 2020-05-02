// addi = () => {
//     document.querySelector("h1").classList.toggle("active")
// }


// document.querySelector(".a").addEventListener("click", addi)

// const numbs = [0, 30, 80, 7, 90, 50, -250]

// const redce = numbs.reduce((toplam, numb) => {
//     return toplam + numb


// })
// console.log(redce);



var alfa = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", 'ı', "İ", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"]
var btn = document.createElement("button")
btn.setAttribute("class", "btn ")
var diss = document.querySelector("#dis")
diss.appendChild(btn)
btn.innerHTML = `Baslat`
btn.style.fontWeight = "bold"
btn.style.fontSize = "50px"

btn.style.fontFamily = "sans-serif"
var renk = document.querySelector("input")
var but = document.querySelector("#but")

rengo = () => {
    btn.style.backgroundColor = `${renk.value}`
    console.log(renk.value)
}

but.addEventListener("click", rengo)

degis = () => {
    var kos = setInterval(() => {
        rand = Math.floor(Math.random() * 29)
        btn.innerHTML = `${alfa[rand].toUpperCase()}`
        console.log(alfa[rand])
        btn.style.width = "200px"
        btn.style.height = "100px"


    }, 100);

    setTimeout(() => {
        clearInterval(kos)
        btn.style.width = "300px"
        btn.style.height = "200px"

    }, 1000);




}
btn.addEventListener("click", degis)