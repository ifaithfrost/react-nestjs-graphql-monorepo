import { useLoginMutation } from '@/graphql/generated'

const Home = () => {
  const [login, asd] = useLoginMutation()

  // console.log(asd)

  return (
    <div>
      <button
        onClick={async () => {
          const response = await login({
            variables: {
              loginInput: {
                email: 'email',
                password: 'password',
              },
            },
          })
          // console.log({ response })
        }}
        type="button"
      >
        123
      </button>
    </div>
  )
}
export default Home
