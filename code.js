'use strict'

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    myMoney: money,
    myData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false,
};
let firstAnswer = prompt( "Введите обязательную статью расходов в этом месяце", "");
let secondAnswer = prompt( "Во сколько это обойдется?", "");
appData.expenses[firstAnswer] = secondAnswer;
console.log(appData.myMoney);
console.log(appData.myData); 
console.log(appData.expenses);
let moneyOneDay = money/30; 
alert ("Бюджет на 1 день = " + moneyOneDay);