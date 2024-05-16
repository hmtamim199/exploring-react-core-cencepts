

const Friend = ({ friend }) => {
  const { name, email } = friend;
  return (
    <div>
      <h3>name:{name}</h3>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;