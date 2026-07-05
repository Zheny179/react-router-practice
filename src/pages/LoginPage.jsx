import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/', { state: { login: 'You are logged in' } })
  }

  return (
    <div className="login">
      <h1>Login Page</h1>
      <button
        className="login__button"
        onClick={ handleClick }
      >
        Log in
      </button>
      <button
        className="login__button"
        onClick={ () => {
          navigate('/', { state: { login: 'You are not logged in' } })
        } }
      >
        Forgot
        login data
      </button>
    </div>
  )
}

export default LoginPage
