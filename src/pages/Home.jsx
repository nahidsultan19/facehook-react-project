import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div className="text-white">
      <h2 className="font-primary">Home page</h2>

      <Link to="/profile" className="underline">
        Go to Profile page
      </Link>
    </div>
  );
};

export default Home;
