 function fizzBuzz(str1, str2){
     let sum = str1.length + str2.length;

     if(sum % 3 === 0 && sum % 5 === 0){
         console.log('FizzBuzz');
     }
     else if(sum % 3 === 0){
         console.log('Fizz');
     }
     else if(sum % 5 === 0){
         console.log('Buzz');
     }
     else{
         console.log('Not divisible by 3 or 5');
     }
 }
 fizzBuzz('Anna','Mugume');



function age(str1, str2, str3){
    let sum = str1.length + str2.length + str3.length;

    if(sum === 18){
        console.log('Minor');
    }
    else if(18 >= sum <= 36){
        console.log('Youth');
    } 
    else{
        console.log('Elder')
    }
}
age('22');


function LongestWord(Sen){
    let x = sen.parameter

    if(x = ++2){
        console.log('return the first word');
    }
    else{
        console.log('The word doesnt exist');
    }
}
LongestWord('Hello','World');

