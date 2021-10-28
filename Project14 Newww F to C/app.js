function toCelsius(fahrenheit){
    let value = (fahrenheit - 32) * 5/9
    return value.toFixed(2)+" °C"
}
function toFahrenheit(Celsius){
    let value2 = (Celsius) * 1.8 + 32
    return value2.toFixed(2)+" °F"
}
function kidCelsius(Value){
    alert(toCelsius(Value))
}
function kidFahrenheit(Value2){
    alert(toFahrenheit(Value2))
}