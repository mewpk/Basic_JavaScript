let qrt = prompt('จำนวนสินค้า')
let sum = 0
for(var i = 1; i<=qrt; i++)
{
    let item = prompt('ราคาสินค้าชิ้นที่'+i)
    sum = sum + parseInt(item)
    document.getElementById('price_list').innerHTML += 'รายการสินค้าชิ้นที่'+i + ' : ' + item +" บาท"+"<br>"
}
document.getElementById('result').innerHTML = "ราคาสินค้ารวม "+sum