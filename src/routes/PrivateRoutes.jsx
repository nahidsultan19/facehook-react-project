import { Navigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useAuth } from "../hooks/useAuth";
import PostProvider from "../providers/PostProvider";
import ProfileProvider from "../providers/ProfileProvider";

const PrivateRoutes = ({ children }) => {
  const { auth } = useAuth();

  if (!auth.authToken) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <PostProvider>
        <ProfileProvider>
          <Navbar />
          <div className="px-8">{children}</div>
        </ProfileProvider>
      </PostProvider>
    </div>
  );
};

export default PrivateRoutes;
