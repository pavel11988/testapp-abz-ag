//components
import UserItem from "../UserItem/UserItem";
import { List, TitleUsersList } from "./UserList.styled";

//components styled

const UserList = ({ users, loading }) => {
  const USERS_EMPTY = users && users.length === 0 && loading === false;
  const USERS_NOT_EMPTY = users;

  return (
    <>
      <TitleUsersList id="users-list">
        Working with GET request
        {/* <a id="users-list"></a>Working with GET request */}
      </TitleUsersList>
      <List>
        {USERS_EMPTY && (
          <h3>Now there are no users! Fill out the form and join us!</h3>
        )}
        {USERS_NOT_EMPTY &&
          users.map(({ id, email, name, phone, photo, position }) => (
            <UserItem
              key={id}
              email={email}
              name={name}
              phone={phone}
              photo={photo}
              position={position}
            />
          ))}
      </List>
    </>
  );
};

export default UserList;
