import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'https://api.voiz.hu/graphql',
});