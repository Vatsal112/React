const Users = ({ user }) => {
  return (
    <>
      <p>{user.name}</p>
      <i>{user.email}</i>
    </>
  );
};

export default Users;
