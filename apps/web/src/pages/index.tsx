import { useLoginMutation } from '@/graphql/generated'

const Home = () => {
  const [login, state] = useLoginMutation()

  const onLogin = async () => {
    const response = await login({
      variables: {
        loginInput: {
          email: 'email',
          password: 'password',
        },
      },
    })

    console.log('response:', response)
  }

  console.log('state:', state)

  return (
    <div>
      <button onClick={onLogin} type="button">
        click
      </button>
    </div>
  )
}
export default Home
