const ADMIN_PASSWORD = "admin";
let message;

let userInput = prompt("Log in");

if (userInput === null) {
  message = "Отменено пользователем!";
} else if (userInput === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
