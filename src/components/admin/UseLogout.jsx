import { UserAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const useLogout = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await logout();
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Unable to log out");
    }
  }

  return handleLogOut;
};
