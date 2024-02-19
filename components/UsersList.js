import { useMemo } from "react";

function UsersList({ users, startingLetter }) {
  users = useMemo(() => {
    if (startingLetter) {
      return users.filter((user) => user.name.startsWith(startingLetter));
    }

    return users;
  }, [startingLetter]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
