function mew(){
    let money =document.getElementById('inputmoney').value
    let persen =document.getElementById('inputpersen').value
    let time =document.getElementById('inputtime').value
    return  alert(money*(persen/100)*time/12+" บาท")
}
