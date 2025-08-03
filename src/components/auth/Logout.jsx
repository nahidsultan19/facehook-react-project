import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <button className="" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Notification" />
    </button>
  );
};

export default Logout;
