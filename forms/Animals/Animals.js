let myAnimals = ["dog", "cat", "horse", "meerkat"]
userAnimal = prompt("Please enter a new animal!")
myAnimals.push(userAnimal)
alert(`The last animal is a (an) ${myAnimals[myAnimals.length-1]}`)

let i = 0 
while(i < myAnimals.length) {
  console.log(myAnimals[i].toLowerCase())
  i++;
}

