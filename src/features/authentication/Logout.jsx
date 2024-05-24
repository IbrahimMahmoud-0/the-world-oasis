import { FaArrowRight } from "react-icons/fa6";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";
function Logout() {
  const { logout, isLogginOut } = useLogout();
  return (
    <ButtonIcon onClick={logout}>
      {isLogginOut ? <SpinnerMini /> : <FaArrowRight />}
    </ButtonIcon>
  );
}

export default Logout;
