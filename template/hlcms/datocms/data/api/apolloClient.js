import 'isomorphic-fetch'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const token = process.env.DATOCMS_API_TOKEN

const link = new HttpLink({
  uri: 'https://graphql.datocms.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})

export default new ApolloClient({
  link,
  cache: new InMemoryCache()
})
