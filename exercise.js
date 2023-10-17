//Day 1 Exercise

// Comments can make code readable     //Q1

// Welcome to learn JavaScript          //Q2

/*
   Comments can make code readable,        //Q3
   easy to reuse, and informative.
*/


var firstname="piran";
const boolean=true                        //Q4
let unde=undefined;
const nullVariable = null;

console.log(typeof(firstname));
console.log(typeof(boolean));              //Q5
console.log(typeof(unde));
console.log(typeof(nullVariable));


var volley, foot, cric, piran;               //Q6

var variable1 = 10;
var variable2 = 'Hello, World!';               //Q7
var variable3 = true;
var variable4 = [1, 2, 3];


var firstName = 'piran';
var lastName = 'avan';
var maritalStatus = 'Single';                   //Q8
var country = 'Srilanka';
var age = 23;


const Name = 'piran', Name1 = 'avan', Status = 'Single', place = 'kopay', age2 = 23;      //Q9



var myAge = 25;
var yourAge = 30;
                                                                    //Q10
console.log('I am ' + myAge + ' years old.');
console.log('You are ' + yourAge + ' years old.');































// Day 2 Exercise

var challenge = 'learn Javascript';                            //Q1

console.log(challenge);                                         //Q2

console.log(challenge.length);   //16                              //Q3

console.log(challenge.toUpperCase());   //LEARN JAVASCRIPT              //Q5

console.log(challenge.toLowerCase());  //learn javascript               //Q6



 
var slicedPhrase = challenge.substring(6);
console.log(slicedPhrase);                      //javascript                 //Q7







var challenge = 'learn Javascript';
var array = challenge.split(' ');           //(2) ['learn', 'Javascript']             Q8
console.log(array);


var challenge = 'learn Javascript';
var array = challenge.split(' ');           //(2) ['learn', 'Javascript']              Q9
console.log(array);


var companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companiesArray = companiesString.split(', ');
console.log(companiesArray);                         //["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]     Q10



var challenge = 'learn Javascript';
var newChallenge = challenge.replace('Javascript', '30 Days Of Python');            //Q11
console.log(newChallenge);                    //learn 30 Days Of Python
                                                      


var challenge = 'learn Javascript';                                               //Q12
var cha = challenge.charAt(15);
console.log(cha);                    //t


var challenge = 'learn Javascript';
var char = challenge.charCodeAt(6);                                                      //Q13
console.log(char);                       //74



var challenge = 'learn Javascript';                                                        //Q14
var position = challenge.indexOf('a');
console.log(position);                      //2


var challenge = 'learn Javascript';
var lastPosition = challenge.lastIndexOf('a');                                            //Q15
console.log(lastPosition);                 //9




var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.indexOf('because');                                                 //Q16
console.log('Position of the first "because" is at index:', positionOfBecause);


var sentence = 'You cannot end a sentence with because because because is a conjunction';
var lastPositionOfBecause = sentence.lastIndexOf('because');
console.log('Position of the last "because" is at index:', lastPositionOfBecause);                         //Q18



var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.search(/\bbecause\b/);
console.log('Position of the first "because" is at index:', positionOfBecause);                             //Q19



var str = ' learn Javascript ';
var trimmedStr = str.trim();                                                                          //Q20
console.log(trimmedStr);



var str = 'learn Javascript';
var result = str.startsWith('learn');                                              //Q21
console.log(result); // This will be true


var str = 'learn Javascript';
var result = str.endsWith('Javascript');                                                 //Q22
console.log(result); // This will be true


var str = 'learn Javascript';
var matches = str.match(/a/g);                                                   //Q23
console.log(matches);


var firstPart = '30 Days of ';
var secondPart = 'JavaScript';
var mergedString = firstPart.concat(secondPart);                                     //Q24
console.log(mergedString);


var str = 'learn Javascript';
var repeatedString = str.repeat(2);                                                 //Q25
console.log(repeatedString);


