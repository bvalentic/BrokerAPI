import Alpaca from '@alpacahq/alpaca-trade-api';
import * as dotenv from 'dotenv'

dotenv.config();

const alpaca = new Alpaca({
  keyId: process.env.ALPACA_KEY_ID!,
  secretKey: process.env.ALPACA_SECRET_KEY!,
  paper: true,
});

alpaca.getAccount().then((account: Record<string, unknown>) => {
  console.log("Login successful.\n")
  var status = account.status
  var equity = account.equity;
  var buying_power = account.buying_power

  console.log(`Account status: ${status}`)

  // check if account is blocked from trading
  if (account.trading_blocked) {
    console.log("Account is currently restricted from trading.");
  } else {
    console.log("Account is not restricted from trading.")
  }

  // check how much money we can use to open new positions
  console.log(`Current buying power: $${buying_power}`);
  console.log(`Current equity: $${equity}`);
});

// Get a list of all active assets.
const activeAssets = alpaca
  .getAssets({
    status: "active",
    exchage: "NASDAQ",
    attributes: ["has_options"]
  })
  .then((assets: [any]) => {
    console.log(`Number of active NASDAQ assets with options: ${assets.length}`);
  });

// Check if AAPL is tradable on the Alpaca platform.
alpaca.getAsset("AAPL").then((aaplAsset: any) => {
  if (aaplAsset.tradable) {
    console.log("We can trade AAPL.");
  }
});

// // Submit a market order to buy 1 share of Apple at market price
// alpaca.createOrder({
//   symbol: "AAPL",
//   qty: 1,
//   side: "buy",
//   type: "market",
//   time_in_force: "day",
// });

// // Submit a limit order to attempt to sell 1 share of AMD at a
// // particular price ($20.50) when the market opens
// alpaca.createOrder({
//   symbol: "AMD",
//   qty: 1,
//   side: "sell",
//   type: "limit",
//   time_in_force: "opg",
//   limit_price: 20.5,
// });
