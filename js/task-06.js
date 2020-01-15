let input;
let total = 0;

while (true) {
  input = prompt("Введите число");

  if (input === null) {
    break;
  }

  //   if (input === NaN) {
  //     alert("Было введено не число, попробуйте еще раз");
  //   }

  input = Number(input);

  total += input;
}

console.log(total);
alert(total);
