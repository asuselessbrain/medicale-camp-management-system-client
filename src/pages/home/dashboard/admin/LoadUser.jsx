import useUser from "../../../../hooks/useUser";

const LoadUser = () => {
  const [user] = useUser();
  console.log(user)
  return <div></div>;
};

export default LoadUser;
