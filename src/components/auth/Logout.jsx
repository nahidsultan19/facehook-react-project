import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Notification" />
    </button>
  );
};

export default Logout;
