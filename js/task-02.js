// const total = 100;
// const ordered = 80;

// if (total < ordered) {
//   console.log(`На складе не достаточно товаров!`);
// } else {
//   console.log(`Заказ оформлен, с Вами свяжется менеджер`);
// }

const total = 100;
const numberInputRef = document.querySelector('input[name="task-2"]');
const btnRef = document.querySelector("button");

btnRef.addEventListener("click", function() {
  console.log(numberInputRef.value);
  const ordered = Number(numberInputRef.value);

  if (total < ordered) {
    alert(`На складе не достаточно товаров!`);
  } else {
    alert(`Заказ оформлен, с Вами свяжется менеджер`);
  }
});
