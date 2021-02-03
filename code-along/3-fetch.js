// 1. find form element
// 2. add event listener on form submit
// 3. on submit event:
//    a. get data from API URL 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
//    b. calculate total bitcoin value in USD currency
//    c. modify output to display `Your _____ Bitcoin is worth ________ USD`

window.addEventListener('DOMContentLoaded', function () {
  let url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'

  // hook into form, class is bitcoin-form

  let bitcoinForm = document.querySelector('.bitcoin-form')
  bitcoinForm.addEventListener('submit', async function(event) {
    event.preventDefault()
    console.log('form submitted')

    let response = await fetch(url) // going to URL on internet, await must be used with async function
    let json = await response.json() // wait for response, array is called json

    console.log(`The current price of bitcoin is ${json.bpi.USD.rate_float}`)

    let currentPriceUSD = json.bpi.USD.rate_float
    let amountInput = document.querySelector('#amount')
    let amount = amountInput.value
    let totalAmount = amountInput.value * currentPriceUSD

    let output = document.querySelector('.output')
    output.innerHTML = `You have ${totalAmount} of bitcoin`
  })
})
