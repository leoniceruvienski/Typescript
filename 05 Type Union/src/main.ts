let age: number | string
age = 20
age = 'vinte'
age = true


function showPet(pet: string) {
    console.log(pet)
}
showPet('dog')


function showPet(pet: 'dog' | 'cat' | 'zebra') {
    console.log(pet)
}
showPet("dog")