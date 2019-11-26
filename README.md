# _Scraper_ Open Microservice

> Retrieve the fully rendered HTML content via Scraper API.

[![Open Microservice Specification Version](https://img.shields.io/badge/Open%20Microservice-1.0-477bf3.svg)](https://openmicroservices.org) [![Open Microservices Spectrum Chat](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/open-microservices) [![Open Microservices Code of Conduct](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](https://github.com/oms-services/.github/blob/master/CODE_OF_CONDUCT.md) [![Open Microservices Commitzen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Introduction

This project is an example implementation of the [Open Microservice Specification](https://openmicroservices.org), a standard originally created at [Storyscript](https://storyscript.io) for building highly-portable "microservices" that expose the events, actions, and APIs inside containerized software.

## Getting Started

The `oms` command-line interface allows you to interact with Open Microservices. If you're interested in creating an Open Microservice the CLI also helps validate, test, and debug your `oms.yml` implementation!

See the [oms-cli](https://github.com/microservices/oms) project to learn more!

### Installation

```
npm install -g @microservices/oms
```

## Usage

### Open Microservices CLI Usage

Once you have the [oms-cli](https://github.com/microservices/oms) installed, you can run any of the following commands from within this project's root directory:

#### Actions

##### scrape

> Retrieve the fully rendered HTML content via Scraper API.

##### Action Arguments

| Argument Name      | Type     | Required | Default | Description                                                                                                                                            |
| :----------------- | :------- | :------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| url                | `string` | `true`   | None    | The target URL to scrape.                                                                                                                              |
| session            | `string` | `false`  | None    | Any random integer. Allows you to continue using the same proxy for each request with that session number. Send a new integer to create a new session. |
| SCRAPER_API_KEY    | `string` | `true`   | None    | API Key provided by ScraperAPI                                                                                                                         |
| SCRAPER_API_ORIGIN | `string` | `false`  | None    | API URL provided by ScraperAPI                                                                                                                         |

```shell
oms run scrape \
    -a url='*****' \
    -a session='*****' \
    -e SCRAPER_API_KEY=$SCRAPER_API_KEY \
    -e SCRAPER_API_ORIGIN=$SCRAPER_API_ORIGIN
```

## Contributing

All suggestions in how to improve the specification and this guide are very welcome. Feel free share your thoughts in the Issue tracker, or even better, fork the repository to implement your own ideas and submit a pull request.

[![Edit oms-scrape-url-html on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/oms-services/oms-scrape-url-html)

This project is guided by [Contributor Covenant](https://github.com/oms-services/.github/blob/master/CODE_OF_CONDUCT.md). Please read out full [Contribution Guidelines](https://github.com/oms-services/.github/blob/master/CONTRIBUTING.md).

## Additional Resources

- [Install the CLI](https://github.com/microservices/oms) - The OMS CLI helps developers create, test, validate, and build microservices.
- [Example OMS Services](https://github.com/oms-services) - Examples of OMS-compliant services written in a variety of languages.
- [Example Language Implementations](https://github.com/microservices) - Find tooling & language implementations in Node, Python, Scala, Java, Clojure.
- [Storyscript Hub](https://hub.storyscript.io) - A public registry of OMS services.
- [Community Chat](https://spectrum.chat/open-microservices) - Have ideas? Questions? Join us on Spectrum.
