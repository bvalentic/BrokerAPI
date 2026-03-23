from alpaca.trading.client import TradingClient
from alpaca.trading.requests import GetAssetsRequest

trading_client = TradingClient('api-key', 'secret-key')

# /account calls

# Get our account information.
account = trading_client.get_account()

# Check if our account is restricted from trading.
if not account.trading_blocked:
    print('Account is not restricted from trading.')
else:
    print('Account is currently restricted from trading.')

# Check how much money we can use to open new positions.
print(f'${account.buying_power} is available as buying power.')

# Check our current balance vs. our balance at the last market close
balance_change = float(account.equity) - float(account.last_equity)
print(f'Today\'s portfolio balance change: ${balance_change}')

# /assets calls next? 
