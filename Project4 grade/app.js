let score = prompt('คะแนนของคุณ')
if(score >= 80){
    document.getElementById('result').innerHTML= 'คุณได้เกรด4'
}
else if(score >= 70){
    document.getElementById('result').innerHTML= 'คุณได้เกรด3'
}
else if(score >= 60){
    document.getElementById('result').innerHTML= 'คุณได้เกรด2'
}
else if(score >= 50){
    document.getElementById('result').innerHTML= 'คุณได้เกรด1'
}
else{
    document.getElementById('result').innerHTML= 'คุณได้เกรด0'
}