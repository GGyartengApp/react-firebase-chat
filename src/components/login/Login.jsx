import "./login.css"
<script type="module" src="./login.js"></script>

const Login = () => {
  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome Back</h2>
        <form>
          <input type="email" name="" id="email" />
          <input type="password" name="" id="password" />
          <Button>Sign in</Button>
        </form>
      </div>
      <div className=""></div>
      <div className="item"></div>
    </div>
  )
}

export default Login