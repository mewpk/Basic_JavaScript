function toCelsius(fahrenheit){
    let value = (fahrenheit - 32) * 5/9
    return value.toFixed(2)+" °C"
}
function display(elementId,Value){
document.getElementById(elementId).innerHTML = Value

}
function toFahrenheit(Celsius){
    let value2 = (Celsius) * 1.8 + 32
    return value2.toFixed(2)+" °F"
}
alert(toCelsius(150))
display("ans",toCelsius(150))
alert(toFahrenheit(20))
display("ans2",toFahrenheit(20))