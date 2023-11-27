import { Card } from '@custom/ui'

import { useMutationMutation } from '@/graphql/generated'

export const Home = () => {
  const [mutation, b] = useMutationMutation()

  console.log(b)

  return (
    <main className="flex h-screen w-screen">
      <h1>test</h1>

      <button
        onClick={async () => {
          const asd = await mutation({
            variables: {
              signUpInput: {
                email: 'test',
                password: 'test',
                name: 'test',
              },
            },
          })

          console.log(asd)
        }}
        type="button"
      >
        botao
      </button>
      <Card />
    </main>
  )
}

export default Home
