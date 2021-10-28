let number = prompt('กรอกเลขที่ต้องการเสี่ยงดวง')
let random_number = document.getElementById('random').innerHTML = Math.floor(Math.random()*100)
if(number == random_number){
    document.getElementById('result').innerHTML = 'ดีใจด้วยคุณถูกรางวัล'
}
else{
    document.getElementById('result').innerHTML = 'เสียใจด้วยคุณไม่ถูกรางวัล'
}