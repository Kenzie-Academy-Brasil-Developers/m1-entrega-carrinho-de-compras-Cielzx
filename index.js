const productsCart = [
    {
        id: 1,
        name: "Abacaxi",
        price: 6.00
    },

    {
        id: 1,
        name: "Maça",
        price: 6.50
    },

    {
        id: 1,
        name: "Uva",
        price: 5.00
    },

    {
        id: 1,
        name: "Pera",
        price: 7.30
    },


]

function adicao(produtos){
    let soma = 0;
    for(let i=0; i < produtos.length; i++){
        soma +=  produtos[i]['price'] 

    }

    return soma
}


//Tags Criadas
let body = document.querySelector('body')
let main = document.createElement('main')
let productList = document.createElement('ul')
let logo = document.createElement('h1')
let secao = document.createElement('section')
let buttonEnd = document.createElement('button')
let texto =document.createElement('p')

//Logo
main.appendChild(logo)
logo.innerText = 'Virtual market'

//Parte do Botão
buttonEnd.classList.add('botaoResultado')
texto.classList.add(`texto`)
buttonEnd.innerText ="Finalizar"


//Percorrendo a lista de objetos
for(let i = 0; i < productsCart.length; i++){

   let nome = productsCart[i]['name']
   let preco = productsCart[i]['price']
    
    
    //lista
    
    let productsDetails = document.createElement('li')
    let fruta =document.createElement('p')
    let valor =document.createElement('span')
    
    
    //classes
    productList.classList.add('produtos')
    productsDetails.classList.add('list')
    main.classList.add('principal')
    
    
    main.append(productList)
    productList.append(productsDetails)
    productsDetails.append(fruta,valor)
     
    fruta.innerHTML = `<strong>${nome}</strong>`
    valor.innerText = `Preço: ${preco}`
    
}

//Parte da section
body.append(main)
main.append(secao)
secao.append(texto,buttonEnd)
texto.innerText = `Total: R$ ${adicao(productsCart)}`


//Foi mal o css todo zoado, ja vim conseguir resolver tarde e não consegui mexer nele direito, espero que esteja tudo certo ksks















