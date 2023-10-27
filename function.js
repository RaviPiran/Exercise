//Q1
function fullName() {
    a="Raveendran Piranavan"
    return(a);
  }
  
console.log(fullName());                  //Argument

  //Q2
  function fullname1(firstName,lastName){
 return firstName+lastName
  }
  console.log(fullname1("piran","avan"));


//Q3
function number(num1,num2){
    return num1+num2
     }
     console.log(number(5,3));

//Arrow Function
let sum1=(x,y)=> x+y;
console.log(sum1(10,5));



//Q4
function areaOfRectangle(length,width){
    return length*width
     }
     console.log(areaOfRectangle(20,10));

//Q5

function perimeterOfRectangle(length,width){
    return (2*(length+width))
     }
     console.log(perimeterOfRectangle(30,10));


//Q6

function volumeOfRectPrism(length,width,height){
    return length*width*height
     }
     console.log(volumeOfRectPrism(30,10,10));



//Q7
function areaOfCircle(radius){
    const pi=Math.PI;
    return pi*radius*radius
     }
     console.log(areaOfCircle(5));

//Q8

function circumference(radius){
    const pi=Math.PI;
    return 2*pi*radius
     }
     console.log(circumference(8));


//Q9

function CelsiusToFahrenheit(oC){

    return ((oC*9/5)+32)
     }
     console.log(CelsiusToFahrenheit(20));


//Q10

function calculateBMI(weightInKg, heightInMeters) {
  const bmi = weightInKg / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const weight = 70; 
const height = 1.75; 
const result = calculateBMI(weight, height);

console.log("BMI Category: " + result); 

  
