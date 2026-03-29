const Alpaca = require('@alpacahq/alpaca-trade-api')

const alpaca = new Alpaca({
  keyId: 'KEY',
  secretKey: 'SECRET',
  paper: true,
})

alpaca.getAccount().then((account) => {
  console.log('Current Account:', account)
})

