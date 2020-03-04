# Examples GraphQL API on top of REST API

Project contains small show cases how to create an adapter to convert a traditional REST interface to GraphQL (backend). 
- `apollo-link-rest:` Using [apollo link rest](https://www.apollographql.com/docs/link/links/rest/) to build a GraphQL API to adapt a REST API GraphQL.
- `rest-axios` Using [axios](https://github.com/axios/axios)  to build a GraphQL API to adapt a REST API GraphQL.

## Getting started
This project is build on top of a Java based GraphQL demo that exposes also a REST interface. This examples requires running this other demo first.

```
git clone https://github.com/npalm/graphql-java-demo.git
git checkout rest-service
cd graphql-java-demo && ./gradlew bootRun
```

Next you can choose either `apollo-link-rest` or `rest-axios` and start the server
```
cd apollo-link-rest
yarn && yarn start
```

Open your browser on http://localhost:4000

