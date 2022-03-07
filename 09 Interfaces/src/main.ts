// Mostrar a cidade do usuário
function showCity(user: any) {
    return user.city
}

interface User {
    name: string,
    address: {
        city: string
        UF: string
    }
}

function showCity(user: User) {
    return user.address.city
}


type UF = 'PR' | 'SP' | 'MG'

interface User {
    name: string,
    address: {
        city: string
        UF: UF
    }
}

function showCity(user: User) {
    user.address.UF = 'PR'
    return user.address.city
}


type UF = 'PR' | 'SP' | 'MG'



//teste

interface User {
    name: string,
    address: {
        city: string
        UF: UF
    }
    sayHello: () => void
}

function showCity(user: User) {
    user.sayHello = () => console.log('Programação')
    return user.address.city
}


type UF = 'PR' | 'SP' | 'MG'

interface User {
    name: string,
    address: {
        city: string
        UF: UF
    }
    sayHello: () => void
}

let users: User[]
users[1].address.city // dessa forma cria  a lista de usuários

