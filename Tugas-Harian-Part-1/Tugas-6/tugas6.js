//soal 1
const phi = 22/7
{
	let circleArea = (r) => {
		return 'luas: ' + phi * r ** 2 
	}
	let circumfence = (r) => {
		return 'keliling: ' + 2 * phi * r
	}
	console.log(circleArea(7))
	console.log(circumfence(14))
}

//soal 2
let kalimat = ''
let tambahKata = (kata) => {
	   return kalimat += `${kata} `
}
tambahKata('saya')
tambahKata('adalah')
tambahKata('seorang')
tambahKata('frontend')
tambahKata('developer')
console.log(kalimat)
//soal 3
let name = ''
const nameFunction = (firstName, lastName) => {
  return { firstName,lastName,
    fullName: () => {
      return name += `${firstName} ${lastName}`
    }
  }
}
//Driver Code 
nameFunction("Smithy", "Jagger").fullName()
console.log(name)

//soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation} = newObject
console.log(firstName, lastName, destination, occupation)

//soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

