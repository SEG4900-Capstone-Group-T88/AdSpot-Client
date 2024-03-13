import { Client, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'http://localhost:8080/graphql',
  exchanges: [cacheExchange, fetchExchange],
  /**
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { Authorization: token ? 'Bearer: ${token}' : ''},
    };
  },
  */
});

export default client;