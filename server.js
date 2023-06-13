// в этом файле JavaScript, который будет выполнен на сервере

// файл содержит объект с маршрутами: ключи - адреса, значения - функции, которые будут выполнены по заходу на соответствующие страницы через браузер
export default {
	// '/test/': function() {
	// 	return 'hello world';
	// }

  // '/test/': function() {
	// 	let num1 = 1;
	// 	let num2 = 2;
		
	// 	return num1 + num2;
	// }

  // отправка HTML кода
    // '/test/': function() {
    //   return '<b>text</b>';
    // }

// обработчик адреса отправки формы
  '/handler/': function(data) {
      console.log(data); // выведется в консоль сервера
      return 'form data received';
    }
}
