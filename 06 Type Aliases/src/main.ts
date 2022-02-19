type Pet = 'dog' | 'cat' | 'zebra'

function showPet(pet: 'dog' | 'cat' | 'zebra') {
    console.log(pet)
}


function displayPet(pet: 'dog' | 'cat' | 'zebra') {
    console.log(pet)
}

// type Pet = 'dog' | 'cat' | 'zebra', isso reduz o código acima

type Pet = 'dog' | 'cat' | 'zebra'

function showPet(pet: Pet) {
    console.log(pet)
}


function displayPet(pet: Pet) {
    console.log(pet)
}

showPet('dog')
displayPet('cat')