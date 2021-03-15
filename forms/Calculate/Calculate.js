function calcAvgSquare(num1,num2,num3){
  let num1Sqaured = Math.pow(num1, 2) 
  let averageOfThree = ((num1+num2+num3)/3)*num1Sqaured
  return averageOfThree
}

let number1 = Number(prompt("Please enter a number!"))
let number2 = Number(prompt("Please enter a second number!"))
let number3 = Number(prompt("Please enter a third number!"))
let calculation = calcAvgSquare(number1,number2,number3)
alert(`The result of the calculation involving ${number1}, ${number2}, and ${number3} is ${calculation}`)