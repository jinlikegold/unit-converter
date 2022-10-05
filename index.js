/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.querySelector("#input-el")

let metersAndFt = document.getElementById("meters-and-ft")
let litersAndGal = document.querySelector("#liters-and-gal")
let kiloAndLbs = document.querySelector("#kilo-and-lbs")

let convertBtn = document.querySelector("#convert-btn")
convertBtn.addEventListener("click", function() {
    let input = inputEl.value
    lengthConversion(input)
    volumeConversion(input)
    massConversion(input)
})

function lengthConversion(unit) {
    let toFeet = unit * 3.281
    let toMeters = unit / 3.281
    metersAndFt.innerHTML = `<p>${unit} meters = ${toFeet.toFixed(3)} feet</p> 
    <p>${unit} feet = ${toMeters.toFixed(3)} meters </p>`
}

function volumeConversion(unit) {
    let toGallons = unit * 0.264
    let toLiters = unit / 0.264
    litersAndGal.innerHTML = `<p>${unit} liters = ${toGallons.toFixed(3)} gallons</p>
        <p>${unit} gallons = ${toLiters.toFixed(3)} liters</p>`
}

function massConversion(unit) {
    let toPounds = unit * 2.204
    let toKilos = unit / 2.204
    kiloAndLbs.innerHTML = `<p> ${unit} kilos = ${toPounds.toFixed(3)} pounds</p>
    <p>${unit} pounds = ${toKilos.toFixed(3)} kilos</p>`
}


