// 1. Number()-კონვერტაცია
const age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));
const currentYear = Number(prompt("შიყვანეთ მიმდინარე წელი:"));
const birthYear = Number(prompt("შეიყვანეთ დაბადების წელი:"));
const calculatedAge =  currentYear - birthYear;
console.log("შეყვანილი ასაკი:", age);
console.log("გამოთვლილი ასაკი:", calculatedAge);

// 2. ლოგიკური ოპერატორები &&, ||, !
const old = NUmber(prompt("შეიყვანეთ ასაკი"));
const isStudent = confirm("ხართ თუ არა სტუდენტი?");
if (isStudent && age> 18){
    console.log("სტუდენტური ფასდაკლება მოქმედებს");
}else{
    console.log("სტუდენტური ფასდაკლება არ მოქმედებს");
}

// 3. Nested ლოგიკური ოპერატორები
const orderAmount = Number(prompt("შეიყვანეთ შკვეთის თანხა:"));
const hasPromoCode = confirm("გაქვთ თ არა პრომოკოდი?");
if (orderAmount>100){
    if(hasPromoCode){
        console.log("ფასდაკლება შეადგენს 20%-ს");

    }else{
        console.log(" ფასდაკლება შეადგენს 10%-ს");
    }

}else if(orderAmount>= 50 && orderAmount <=100 && hasPromoCode){
    console.log("ფასდაკლება შეადგენს 5%-ს");

}else{
    console.log("ფასდაკლება არ მოქმედებს")
}


// 4. If/Else -ონლაინ თამაშის რეგისტრაციის სისტემა.
const personAge = Number(prompt("შეიყვანეთ თქვენი ასაკი"));
const experieceYears = Number(prompt("შეიყვანეთ თამაშის გამოცდილების წლები:"));
const isVip = confirm("გაქვთ თუ არა VIP სტატუსი?");

if(personAge>=18){
    if(experienceYears >= 2){
    alert("შეგიძლიათ ტურნირში მონაწილეობა");
}else {
    alert("შგიძლიათ მხოლოდ დამწყებთა ტურნირში მონაწილეობა");

}
}else if(isVip) {
    alert("შეგიძლიათ სპეციალურ საბავშვო ტურნირში მონაწილეობა");

}else {
    alert("რეგისტრაცია მიუწვდომელია");
}

// 5. Switch - კალკულატორი

const num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));
const operator = prompt("შეიყვანეთ ოპერატია:(+, -, *, /, %):");

switch(operator){
    case "+":
        result = num1 + num2;
        alert(result);
        console.log(result);
        break;
    case "-":
        result = num1 - num2;
        alert(result);
        console.log(result);
        break;
    case "*":
        result = num1 * num2;
        alert(result);
        console.log(result);
        break;
    case "/":
        result = num1 / num2;
        alert(result);
        console.log(result);
        break;
    case "%":
        result = num1 % num2;
        alert(result);
        console.log(result);
        break;
}

// 6. Ternary Operator 

const adult =Number(prompt("შეიყვანეთ თქვენი ასალი:"));
const statusMessage = adult>=18? "სრულწლოვანი ხართ.": "არასრულწლოვანი ხართ.";
alert(statusMessage);


