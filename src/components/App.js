
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [warning,setWarning] = useState(false);


  const checkData=()=>{
    if(!user && !password){
      setWarning(true)
    }
    else
    setWarning(false)
    setPassword('')
    setUser('')
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label>Username:</label>
        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/><br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {
          warning ? <p id="errorMessage">Both username and password are required</p> : ''
        }
        <br/>
        <button onClick={checkData}>Login</button>
    </div>
  )
}

export default App
