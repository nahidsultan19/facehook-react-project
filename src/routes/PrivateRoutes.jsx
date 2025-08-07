import { Navigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { auth } = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Navbar />
      <div className="px-8">{children}</div>
    </div>
  );
};

export default PrivateRoutes;
