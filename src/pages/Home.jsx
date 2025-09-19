import { useEffect, useReducer } from "react";
import { actions } from "../actions";
import PostList from "../components/posts/PostList";
import useAxios from "../hooks/useAxios";
import { postReducer } from "../reducers/PostReducer";
import { initialState } from "../reducers/ProfileReducer";

const Home = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();

  console.log("data fetching", state?.posts);

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };
    fetchPost();
  }, []);

  if (state?.loading) {
    return <div className="text-white">We are working..</div>;
  }

  if (state?.error) {
    return <div>Error in fetching posts {state?.error?.message}</div>;
  }

  return (
    <div className="text-white">
      <PostList posts={state?.posts} />
    </div>
  );
};

export default Home;
