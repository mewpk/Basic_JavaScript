function toCelsius(){
    let fahrenheit = prompt('Fahrenheit')
    let value = (fahrenheit - 32) * 5/9
    document.getElementById('ans').innerHTML += "จาก " + fahrenheit + " °F"+' ได้เป็น ' +value.toFixed(2)+" °C" + '<br>'
}
function toFahrenheit(){
    let Celsius = prompt('Celsius')
    let value2 = (Celsius) * 1.8 + 32
    document.getElementById('ans2').innerHTML += "จาก " + Celsius + " °C"+' ได้เป็น ' +value2.toFixed(2)+" °F"+ '<br>'
}
toCelsius()
toFahrenheit()