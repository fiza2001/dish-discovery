import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/8fhkkx1egwnn/environments/master',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 0XbHVL2kedpCgH0O_b320-gfCRJQFGtTJD833joCFUc',
  },
});

export default client;

// content preview api - GZc3iJ47mNE1W8_pMxBymF3M4QczpaTKStfR6ToPy-8
// condent delivery api - 0XbHVL2kedpCgH0O_b320-gfCRJQFGtTJD833joCFUc
