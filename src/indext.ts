const button: HTMLButtonElement = document.querySelector('button')!;
const input11: HTMLInputElement = document.querySelector('#num1')!;
const input22: HTMLInputElement = document.querySelector('#num2')!;
const sum1: HTMLElement = document.querySelector('#sum1')!;

sum1.innerText = '0';

function add1(num1: number, num2: number): number{
    return num1 + num2;
}

button.addEventListener('click', function(){
    const val = add1(+input11.value, +input22.value);
    console.log(val);
    sum1.innerText = val.toString();
})