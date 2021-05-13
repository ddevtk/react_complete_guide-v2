import Card from '../UI/card/card.component';
import classes from './user-list.module.css';

const UserList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.length === 0 ? (
          <li className={classes.message}>Please type your information</li>
        ) : (
          users.map(user => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))
        )}
      </ul>
    </Card>
  );
};
export default UserList;
