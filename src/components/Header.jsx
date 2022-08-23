import logo from "../img/logo.png";
import { BsPersonFill, BsQuestionCircleFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="img" src={logo} />
      </div>

      <div className="header-icons">
        <a>
          <BsQuestionCircleFill />
        </a>
        <a>
          <BsPersonFill />
        </a>
      </div>
    </header>
  );
};

export default Header;
