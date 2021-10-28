let round = prompt('จำนวนรอบ')
let sum = 0
for(var i = 1; i <= round;i++)
{
    var ans = prompt('หัว หรือ ก้อย')
    if(Math.floor(Math.random()*10) <=4)
    {
        random_ans="หัว"
    }
    else
    {
        random_ans="ก้อย"
    }
    if(ans == random_ans){
        alert('ยินดีด้วยคุณทายถูก')
        sum++
    }
    else{
        alert('เสียใจด้วยคุณทายผิดนะ')
        
    }
    document.getElementById('game').innerHTML +=  " คุณทายว่า "+ ans +" คำตอบคือ " +random_ans + '<br>'
}
document.getElementById("summer").innerHTML = "จำนวนที่คุณทายคือ "+ round + " จำนวนครั้งที่ทายถูกคือ " + sum
