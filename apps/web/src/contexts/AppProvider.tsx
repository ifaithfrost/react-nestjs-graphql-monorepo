import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { PropsWithChildren } from 'react'

import { version, name } from '../../package.json'

const client = new ApolloClient({
  uri: 'http://localhost:4040/graphql',
  cache: new InMemoryCache(),
  version,
  name,
  credentials: 'include',
})

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
