// any, void, never
// any
let stock: any = 89
stock = null

// void
let stock: void
stock = undefined

// Só undefined preenche void

function showInformation(): void {
   console.log('cataline')
}
// never
function error(): never {
    throw new Error('error')
}