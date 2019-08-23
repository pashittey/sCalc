
function dotheadd () {
  var x = Number(document.getElementById('usernum1').value)
  var y = Number(document.getElementById('usernum2').value)
var add = x + y 
document.getElementById('demo3').innerHTML = add
}

function dothesubt () {
  var x = Number(document.getElementById('usernum1').value)
  var y = Number(document.getElementById('usernum2').value)
  var subt = x - y 
  document.getElementById('demo3').innerHTML = subt
}
