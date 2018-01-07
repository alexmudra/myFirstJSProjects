//Ознакомление с функциями

// function sayHello(){

// 	console.log( "Hello, Alex");
// }
// sayHello();
// sayHello();
// sayHello();

//Вывод будет 3 раза Hello, Alex

//Усложняем. Инициализируем и передадим в функцию параметр/переменную name

// function sayHello (name){
// 	name = name || "Guest";
// 	console.log( "Hello, "+name+"!");
// 	}
// 	//
// 	sayHello("John");
// 	var n = "Mike";
// 	sayHello(n);
// 	sayHello();

// ФУНКЦИЯ МОЖЕТ ПРИНИМАТЬ МНОГО ПАРАМЕТРОВ. ПРИМЕР С SIGN. ПАРАМЕТРЫ ПЕРЕДАЮТСЯ ЧЕРЕЗ ЗАПЯТУЮ.
// ПРИМЕР КОДА ВНИЗУ

// function sayHello (name, sign){
// 	name = name || "Guest";
// 	sign = sign || "Nothing to show";
// 	print( "Hello, " + name +  sign );
// }
// 	//
// 	sayHello("John" , "!");
// 	var n = "Mike" ;
// 	sayHello(n);
// 	sayHello();


//Пример кода с return

// function sum(n1, n2) { // обявляем функцию sum которая принимает 2 параметра n1, n2
// 	return n1 + n2; // оператор return возвращает значение(в данном случае сумму n1+n2)

// 	// 2 ВАРИАНТА ИСПОЛЬЗОВАНИЯ ЕТОЙ ФУНКЦИИ
// 	// 1 вариант:

// 	var result = sum(5, 3); // создали переменную resultat и присвоили ей значение из ВЫЗОВА ФУНКЦИИ sum. Интерпретатор вызывает функцию и передает
// 	//туда параметр 5 и 3. Функция sum суммирует параметры и возвращает результат в переменню result
// 	print(result);

// 	// 2 вариант напрямую вывести результат:
// 	print(sum(2, 4));

//}
///////////////////////////////////////////
// var x = function(){};
// function foo(x){
// var y;
// if (x){
// 	print(y);
// }else{
// 	y=2;
// 	print(y);
// }	
// }

// "ЗАМЫКАНИЕ ФУНКЦИИ"-ЭТО СПОСОБНОСТЬ СОХРАНЯТЬ ССЫЛКУ НА ПЕРЕМЕННУЮ ИЗ ВЫШЕСТОЯЩЕГО КОНТЕКСТА

// function say(){
// return function (name){ // name это локальный параметр и его не надо обявлять
// 	return greet + " " + name;
// };

// 	}
// //var en = say("Hello");
// var greet = "Hello you "; 
// print (en ("John")); // тут будет вывод Hello you Jonh. Потому что функция say возвращает значение переменной "greet" Hello you, что выше
// print (en ("Liza"));
// print (en ("Mike"));


// var greet = "Привіт";// тут будет вывод Привіт Alex. Потому что функция say возвращает значение переменной "greet" Привіт, что выше
// //var ukr = say ("Hello");
// print (ukr ("Alex"));
// print (ukr ("Grisha"))

// ПРИМЕР КОГДА МЫ МОЖЕМ ФУНКЦИЮ ПЕРЕДАВАТЬ. Своего рода мы сделаем динамическую функцию с 3 параметром
// action что бы в него что-то передавать(функции включительно)

// function foo (base, count, action){
// 	for (var i = base; i <=count; i++)
// 		action (i); // action в данном случае универсальная составляющая foo, ее можно передавать
// }
// //var x = print;
// foo (1,5,print); // метод print попадет в цикл action и исполнится, мы можем подставлять вместо print все что можно