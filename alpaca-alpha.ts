import Alpaca from '@alpacahq/alpaca-trade-api';
import * as dotenv from 'dotenv'

dotenv.config();

const alpaca = new Alpaca({
  keyId: process.env.ALPACA_KEY_ID!,
  secretKey: process.env.ALPACA_SECRET_KEY!,
  paper: true,
});

alpaca.getAccount().then((account: Record<string, unknown>) => {
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
