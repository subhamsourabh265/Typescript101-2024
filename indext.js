var button = document.querySelector('button');
var input11 = document.querySelector('#num1');
var input22 = document.querySelector('#num2');
var sum1 = document.querySelector('#sum1');
function add1(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    var val = add1(+input11.value, +input22.value);
    console.log(val);
    sum1.innerText = val.toString();
});
