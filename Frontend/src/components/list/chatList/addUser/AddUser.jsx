import "./addUser.css"

const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
            <input type="text" name="username" placeholder="Username"/>
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar1.png" alt="" />
                <span>Jane Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser