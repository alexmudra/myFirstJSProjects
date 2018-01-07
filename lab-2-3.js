//lab-2-3.js
//
/*Условие: Вывести в форме сообщения возраст и потенциал человека
var age = 110;
var output = "";

if (age >=18 && age < 60)
	output = "Ohh. You should work";

else if (age > 59)
	output = "You should retire";

else if (age>=1 && age <=17)
	output = "You too young";

else 
	output ="Unnoun age";

console.log(output);*/


/*Условие: Вывести только числа которые делятся без остатка на 3.*/

/*for (var i = 322; i < 356; i++){

if (i % 3 != 0)

	continue;
console.log (i)

}*/

/*Условие: Вывести только первое число которые делятся без остатка на 3.*/

// for (var i = 322; i < 356; i++){
// 	if (i % 3 != 0)
// 	continue;
// 	console.log (i)
// 	break;
// }

// //Проверить как работает цикл switch на примере

// var x = 34;

// switch (x){
// 	case 0:
// 		console.log("Zero");
// 		break;
// 	case 1: 
// 		console.log("One");
// 		break;
// 	case 2:
// 		console.log("Two");
// 		break;
// 	case 3:
// 		console.log("Tree");
// 		break;
// 	case 4:
// 		console.log("Four");

// 	default: 
// 		console.log("Ups. Something wrong")
// }


/*Задача вывести эту строчку на правильном русском языке. С правильными окончаниями.*/

/*Подсказка с вариантами окончаний:
1 ->a
2,3,4, -> ы
11-14 -> без особых окончаний. Оставляем строку как есть
*/

// var num = 2;
// var str = "На ветке сидит "+num+" ворон";
// var x = "";

// if (num % 100 <11 || num % 100 >14){

// 	switch (num % 10){
// 		case 1: 
// 			x = "a"
// 			break;

// 		case 2:
// 		case 3:
// 		case 4:
// 			x = "ы";
// 			break;
// 	}

// }
// console.log(str + x);