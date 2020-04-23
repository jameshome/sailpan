# sailpan

[**Sailing Through the Pandemic**](https://sailpan.info) is a website providing information to ocean voyagers and liveaboard sailors about port closures and government restrictions related to the COVID-19 pandemic. This monorepo contains all frontend and backend code for the site.

### Backend

The backend API is served by [Strapi](https://strapi.io/) using [GraphQL](https://graphql.org/).

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

This will install required `node_modules` and start dev instances of the frontend and backend.
