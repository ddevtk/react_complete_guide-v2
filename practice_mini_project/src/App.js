import { useState } from 'react';
import './App.css';
import UserList from './components/user-list/user-list.component';
import AddUser from './components/user/user.component';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList(preState => {
      return [
        ...preState,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  let userListContent =
    userList.length === 0 ? (
      <p>Please add user</p>
    ) : (
      <UserList users={userList} />
    );
  return (
    <div className='App'>
      <AddUser onAddToList={addUserHandler} />
      {/* {userListContent} */}
      <UserList users={userList} />
    </div>
  );
}

export default App;
