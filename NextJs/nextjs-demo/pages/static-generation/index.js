import Users from "@/components/users";

const index = ({ users }) => {
  return (
    <>
      <div>
        <h1>Get static props example</h1>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <Users user={user} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;

export async function getStaticProps(context) {
  const response = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  return {
    props: {
      users: response,
    },
    revalidate: 1,
  };
}
