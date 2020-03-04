import { IResolvers } from 'apollo-server'
import { ApolloClient, ApolloQueryResult } from 'apollo-client'
import { RestLink } from 'apollo-link-rest'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { gql } from 'apollo-server'
import fetch from 'isomorphic-fetch'

const restLink = new RestLink({
    uri: 'http://localhost:8080/',
    customFetch: fetch,
    responseTransformer: async (response) => response.json().then((x: any) => x.content),
});

const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
});

const query = gql`
  query {
    talks @rest(type: "Talk", path: "talks/") {
      title
      id @export(as: "id")
      summary
      speakers @rest(type: "Speaker", path: "talks/{exportVariables.id}/speakers") {
        id
        name
        blog
        github
      }
    }
  }
`;

export const TalkResolver = {
    Query: {
        talks: () => {
            return client.query({ query }).then(response => response.data.talks);
        }
    },
};