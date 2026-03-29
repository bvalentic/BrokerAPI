const Alpaca = require('@alpacahq/alpaca-trade-api')

const alpaca = new Alpaca({
  keyId: 'PKRL23VGUL3SAPQDDGXVD5CXBC',
  secretKey: 'EwVaE1y6JM7pR7wZDHm76WiDsjXfxQnng1xjG9cHjpyr',
  paper: true,
})

alpaca.getAccount().then((account) => {
  console.log('Current Account:', account)
})

