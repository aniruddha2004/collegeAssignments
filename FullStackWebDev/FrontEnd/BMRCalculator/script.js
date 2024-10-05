let form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value)
    let gender = document.querySelector("input[name=gender]:checked")
    let height = parseFloat(document.getElementById("height").value)
    let weight = parseFloat(document.getElementById("weight").value)
    let bmr
    if(gender.value == 'M'){
        // bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
        bmr = 5 + (10 * weight) + (6.25 * height) - (5 * age)
    }
    else {
        // bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
        bmr = -161 + (10 * weight) + (6.25 * height) - (5 * age)
    }
    document.getElementById("display").innerHTML = bmr
})