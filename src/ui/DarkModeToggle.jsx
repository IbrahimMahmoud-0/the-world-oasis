import { FaMoon, FaSun } from "react-icons/fa6";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
