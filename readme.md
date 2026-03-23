# BrokerAPI

Service Description:

The API interacting with my brokerage account

Functions:

- Making trades
- Querying APIs for low-volume data

## Getting Started

### Create Virtual Env and Install Dependencies

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
```

### Run Program

```bash
python alpha-broker.py # or whichever py file you want to run
```

## API Candidates

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

### Trade Layer

MySQL is my first choice, with Postgres and redis in second and third, based on CNCF rankings

- MySQL
- PostgreSQL
- redis
- TiKV
- Vitess

Deep recommends PostgreSQL, with redis as a caching layer add-on if needed.
TiKV (NoSQL, can become SQL with TiDB) and Vitess are not needed unless heavily horizontal scaling is required.

### Market Layer

- QuestDB
- TimescaleDB
- Clickhouse

Deep recommends QuestDB or TimescaleDB, with redis as an optional caching layer (same instance as above)
QuestDB has better performance according to their website graphs, and Timescale seems to be SaaS... Quest it is

## Roadmap

Todos and objectives for this service

### General

[] Select a brokerage (Alpaca is frontrunner)
[] Implement authenticated connection to broker
[] Abstract broker layer so the underlying provider can be swapped with minimal changes
[] Handle API rate limiting, retries, and connection failure recovery

### Environment and CI/CD

[] Create differentiation between "test" and "prod" environments
[] Create beta environment for develop branch
[] Add CI/CD pipeline to push changes merged into develop and main

### Database

#### Trade DB

[] Design schema for trades, model predictions, and signals
  [] Calendar events and other rarely-updated data?
[] Choose and set up a database (e.g. PostgreSQL) for transaction and reference data
[] Implement data ingestion pipeline for OHLCV and any derived features (Returns, Range, etc.)
[] Add redis caching layer

#### Market DB

/Include here or in separate service?/
[] Design schema for ticker history, OHLCV data, and other high-volume entries
[] Choose and set up a database (e.g. QuestDB) for market data
[] Add data validation and quality checks: missing bars, stale prices, outlier returns
[] Define a data retention policy and archiving strategy for historical records
[] Add redis caching layer
