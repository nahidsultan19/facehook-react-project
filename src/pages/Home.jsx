import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { postReducer } from "../reducers/PostReducer";
import { initialState } from "../reducers/ProfileReducer";

const Home = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();

  useEffect(() => {}, []);

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
