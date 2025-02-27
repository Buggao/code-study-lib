import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <Link to="/">Log In</Link>
    </div>
  )
}

export default Login