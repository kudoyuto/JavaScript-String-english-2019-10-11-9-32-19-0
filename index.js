// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var upper = sentence.charAt(0).toUpperCase() + sentence.slice(1,4);
var secUpper = sentence.charAt(5).toUpperCase() + sentence.slice(6,14);
var thirdUpper = sentence.charAt(16).toUpperCase() + sentence.slice(17,18);
var fourthUpper = sentence.charAt(19).toUpperCase() + sentence.slice(20,24);
 
console.log(upper +" "+secUpper +" "+ thirdUpper+" "+ fourthUpper);



// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.slice(1));

//TODO write your code here...
