import './App.css';
import CreateNewUser from './components/NewUser';
import List from './components/UsersList';
import React, {useState} from 'react';

function App() {
  const [newUsers, setnewUsers] = useState([]);
  function createUser(newUser) {
    setnewUsers([...newUsers, newUser]);
  }
  return (
    <div className="App">
      <List extraUsers={newUsers}/>
      <CreateNewUser createUser={createUser}/>
    </div>
  );
}

export default App;
