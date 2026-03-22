# BrokerAPI

The API interacting with my brokerage account, making trades

## Candidates

- ~~Fidelity~~
  - No API, not an option
- Alpaca
  - Free paper trading API
  - Live trading only requires opening brokerage account
    - Commission-free trading, no fees except for things like wire transfer fees
    - Truly no fees? Nothing at all?
  - Margin and shorting available at $2000
  - Seems to be a clear winner
- Coinbase
  - Crypto (spot and derivatives), commodity futures; no other securities
- IBKR
  - $0.0035/trade, but $0.35 minimum per order, so the same as Tradier Lite?
  - Need to compare APIs
- Tradier
  - Lite version is free, but $0.35/trade; Pro is $10/month but free trades (break-even between the two is 1 trade/day)

## Database Selection

MySQL is my first choice, with Postgres and redis in second and third, based on CNCF rankings

- MySQL
- PostgreSQL
- redis
- TiKV
- Vitess

## Roadmap

Todos and objectives for this service

### General

[] Select a brokerage (Alpaca is frontrunner)
[] Implement authenticated connection to broker
[] Abstract broker layer so the underlying provider can be swapped with minimal changes
[] Handle API rate limiting, retries, and connection failure recovery

### Environment

[] Create differentiation between "test" and "prod" environments

### Database

/Include here or in separate service?/
[] Design schema for trades, ticker history, model predictions, and signals
[] Choose and set up a database (e.g. PostgreSQL, SQLite for local dev)
[] Implement data ingestion pipeline for OHLCV and any derived features (Returns, Range, etc.)
[] Add data validation and quality checks: missing bars, stale prices, outlier returns
[] Define a data retention policy and archiving strategy for historical records
