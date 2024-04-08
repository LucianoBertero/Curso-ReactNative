import { useUsers } from "../hooks/useUsers";
import { User } from "../interfaces/reqres.interface";
import { UsersRow } from "./UserRow";
const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();

  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UsersRow key={user.id} user={user}></UsersRow>
          ))}
        </tbody>
      </table>

      <div
        className="
      "
      >
        <button onClick={prevPage}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </>
  );
};

export default UsersPage;
