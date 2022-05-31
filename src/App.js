import './App.css';
import { useState, useEffect } from 'react';
import User from './components/User/User';
function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    setUsers(users);
    console.log(users);

  },[])

  return (
    <div>
      <center><h1>User Informations</h1></center>
      <hr />

      <center>
        <User></User>
      </center>
    </div>
  );
}

export default App;
