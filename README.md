# chaos-demo
Chaos experiment demo with ChaosToolkit

<img alt="diagram" src="./diagram.png">

## Issues

If you spot any issue with this repository please do raise an issue in Github

## Prerequisites

* [python3](https://www.python.org/downloads/)
* [docker](https://docs.docker.com/engine/install/)
* [docker-compose](https://docs.docker.com/compose/install/)

## Services

This will run 2 docker containers: api & jokes-api (provider)

```sh
make failing-up
# or
make resilient-up
```

Alternatively you can run

```sh
docker-compose -f docker-compose.failure.yaml up --build
# or
docker-compose -f docker-compose.resilient.yaml up --build
```

To cleanup containers:

```sh
make failing-down
# or
make resilient-down
```

or

```sh
docker-compose -f docker-compose.failure.yaml down
# or
docker-compose -f docker-compose.resilient.yaml down
```

You can test it by opening `web/index.html` in your browser. The page does the call to the api on each refresh.

NOTE: API is exposed on the port 3000

## Chaos experiment

### Steady state
Our api responds with status 200

### Action
Simulate jokes provider (jokes-api) downtime by stopping its docker container

```sh
docker stop jokes-api
```

### Rollback
Restart jokes provider (jokes-api) docker container

```sh
docker start jokes-api
```

## ChaosToolkit
The experiment can be executed with ChaosToolkit

### Setup
To create python `venv` and install ChaosToolkit just execute `setup.sh` in `chaos` directory:
```sh
cd chaos
source ./setup.sh
cd ..
```

### Execute
Having active `venv` with installed `chaos/requirements.txt` [(setup.sh)](#setup) you can execute 

```sh
make chaos-run
```

or in `chaos` directory:

```sh
chaos run --rollback-strategy=always experiment.json
```