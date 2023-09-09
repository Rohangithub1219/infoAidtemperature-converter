let celint = document.querySelector('#celcius > input');
let fahint = document.querySelector('#fahrenheit > input');
let kelint = document.querySelector('#Kelvin > input'); 

function display(number){
    return Math.round(number * 100) / 100;
}
// Celcius to fahrenheit and Kelvin
celint.addEventListener('input', function(){
    let ctemp = parseFloat(celint.value);
    let ftemp = (ctemp * 9/5) + 32;
    let ktemp = ctemp + 273.15;

    fahint.value = display(ftemp);
    kelint.value = display(ktemp);
});
// fahrenheit to celius and kelvin
fahint.addEventListener('input', function(){
    let ftemp = parseFloat(fahint.value);
    let ctemp = (ftemp - 32) * (5/9);
    let ktemp = (ftemp - 32) * (5/9) + 273.15;

    celint.value = display(ctemp);
    kelint.value = display(ktemp);
});
// kelvin to fahrenheit and celcius
kelint.addEventListener('input', function(){
    let ktemp = parseFloat(kelint.value);
    let ftemp = (ktemp - 273.15) * (9/5) + 32
    let ctemp = (ktemp - 237.15)

    fahint.value = display(ftemp);
    celint.value = display(ctemp);
})


