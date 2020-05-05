# SailPan

[**Sailing Through the Pandemic**](https://sailpan.info) is a website providing information to ocean voyagers and liveaboard sailors about port closures and government restrictions related to the COVID-19 pandemic. This monorepo contains all frontend and backend code for the site.

### Backend

The backend API is served by [Strapi](https://strapi.io/) using [GraphQL](https://graphql.org/). We persist with [SQLite](https://www.sqlite.org/) in development and [MySQL](http://www.mysql.com) in production, both connected to Strapi through [Bookshelf](https://bookshelfjs.org/).

### Frontend

The `sailpan` frontend is written in [React](https://reactjs.org/) and [Next.js](https://reactjs.org). Styling is done with [styled jsx](https://github.com/zeit/styled-jsx). Maps are rendered by [Mapbox](https://mapbox.com) with [react-map-gl](https://github.com/visgl/react-map-gl). We use [Apollo](https://www.apollographql.com/) to parse the GraphQL provided by the backend.

### Install

You'll want [node](https://nodejs.org) 12 LTS, [yarn](https://yarnpkg.com/) and a clone of this repository.

```
cd sailpan
yarn install-backend
yarn install-frontend
yarn dev
```

This will install required `node_modules` and start dev instances of the frontend and backend. You can also start the frontend and backend separately, check out the root level `package.json` for help.

### Dev Notes

- **css**: Set all colors, elevations, and fonts in `utils/style`. Call the corresponding object properties in each component's `<style jsx>` elements. Use global css and inline styling sparingly.

- **js**: Use the [Prettier](https://prettier.io/) defaults. Use function components and [Hooks](https://reactjs.org/docs/hooks-intro.html) instead of classes.

### Deployment

Strapi and Next.js are both run as [pm2](https://pm2.keymetrics.io/) processes, proxied through [nginx](www.nginx.com). Environment variables are persisted with [dotenv](https://github.com/motdotla/dotenv) in separately deployed `.env` files.

### Tools

[GPS Coordinate Converter](https://www.pgc.umn.edu/apps/convert/)
