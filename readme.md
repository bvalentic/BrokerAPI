# BrokerAPI

The API interacting with my brokerage account, making trades

## Candidates

- ~~Fidelity~~
  - No API, not an option
- Alpaca
  - Free paper trading API
  - Live trading only requires opening brokerage account
    - Commission-free trading, no fees except for things like wire transfer fees
  - Margin and shorting available at $2000
  - Seems to be a clear winner
- Coinbase
  - Crypto (spot and derivatives), commodity futures; no other securities
- IBKR
  - $0.0035/trade, but $0.35 minimum per order, so the same as Tradier Lite?
  - Need to compare APIs
- Tradier
  - Lite version is free, but $0.35/trade; Pro is $10/month but free trades (break-even between the two is 1 trade/day)

## Database

MySQL is my first choice, with Postgres and redis in second and third, based on CNCF rankings

- MySQL
- PostgreSQL
- redis
- TiKV
- Vitess

## Roadmap

Todos and objectives for this service
