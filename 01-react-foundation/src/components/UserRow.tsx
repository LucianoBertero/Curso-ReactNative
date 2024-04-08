import { User } from "../interfaces";

interface Props {
  user: User;
}

export const UsersRow = ({ user }: Props) => {
  const { avatar, first_name, email } = user;
  return (
    <tr>
      <td>
        <img style={{ width: "50px" }} src={avatar} alt="User avatar" />
      </td>
      <td>{first_name}</td>
      <td>{email}</td>
    </tr>
  );
};
