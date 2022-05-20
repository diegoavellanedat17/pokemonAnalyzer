# Pokémon Height/Weight Analyzer

This repo is using typescript, to power a service that determine the average weight and heihgt of a given subset of Pokémon.

- Pokémon analyzer requires [Node.js](https://nodejs.org/) v16.14.1 to run. ⚡️

## Installation

Clone the repository and install the dependencies

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/diegoavellanedat17/pokemonAnalyzer.git
cd pokemonAnalyzer
```

```sh
npm install
```

## Start

To start the server, run the following command with the limit and offset options

```sh
npm run start -- --limit 10 --offset 0
```

You should see output similar to

```sh
{ height: 10.5, weight: 357.8 }
exceTimer: 658.755ms
```

## Running Test

This project is using jest for unit test, for running test

```sh
npm run test
```
