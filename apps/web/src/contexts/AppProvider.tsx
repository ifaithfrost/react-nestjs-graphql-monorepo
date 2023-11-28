import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import type { PropsWithChildren } from 'react'

import { version, name } from '../../package.json'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.API_URL,
    fetchOptions: {
      mode: 'no-cors',
    },
  }),
  name,
  version,
})

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
