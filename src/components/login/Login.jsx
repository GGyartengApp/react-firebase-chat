import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"


const Login = () => {
  const [avatar,setAvatar] = useState({
    file:null,
    url:""
  })

  const handleAvatar = e =>{
    if(e.target.files[0]){
      setAvatar({
        file:e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleLogin = e =>{
    e.preventDefault()
    toast.error("Hello");
  }

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
          <button>Sign In</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
      <h2>Create a  User Profile</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar1.png"} alt="" />
            Upload an Image
            </label>
          <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
          <input type="text" name="Username" placeholder="username" />
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login