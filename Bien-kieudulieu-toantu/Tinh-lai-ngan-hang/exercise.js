let x = parseInt(prompt('Số tiền vay'));
let y = parseInt(prompt('Số năm'));
let z = parseFloat(prompt('Lãi suất hàng năm'));
// document.write(typeof x);

let s = x + (y * z);


// document.write('Số tiền vay: ' + x + ' Triệu đồng' + '</br>');
// document.write('Số năm: ' + z + ' Năm' + '</br>');
// document.write('Lãi suất: ' + y + ' %' + '</br>');
document.write('Tổng lãi suất phải trả = ' + s + ' Triệu đồng');