
# OpenRUM API
[![Build Status](https://travis-ci.com/openrum/openrum-api.svg?branch=main)](https://travis-ci.com/openrum/openrum-api)

OpenRUM is an non-intrusive Real User Monitoring tool that will track Web Performance data from real users accessing your web application and report it to an endpoint to collect and process that data.

Some of the metrics you can collect using OpenRUM are:
- First Contentful Paint
- Largest Contentful Paint
- Cumulative Layout Shift
- Time To Interactive
- Time To First Byte
- Page Load Time

[Official Site](https://openrum.io/ "Official Site")

## Store data

This API exposes an endpoint which receives the collected data and stores it in a MongoDB collection.


## Development
In order to build OpenRUM-API you need to have installed node and nodemon.

1. Insall node: [Node Installer](https://nodejs.org/en/download/ "Node Installer")
2. Install nodemon
```bash
npm install --global nodemon
```
3. Intall node modules
```bash
npm install
```

## Build Development
In order to build development you need to run:

    npm run dev

Once you run this command the development building process begins. When it finish , the API will be listening on https://localhost:5100 (or the port you set on your env).

The application is going to be runned in watch mode so you can make changes and it gets automatically rebuild.
