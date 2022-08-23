import { MdSell } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li className="siderbar-item">
          <a href="">
            <BsFillCartCheckFill className="svg" />
            Buy
          </a>
          <ul>
            <li>
              <a href="#">
                <BsReverseLayoutTextSidebarReverse className="svg" />
                In Progress
              </a>
            </li>
            <li>
              <a href="#">
                <BsClockHistory className="svg" />
                History
              </a>
            </li>
          </ul>
        </li>
        <li className="siderbar-item">
          <a href="">
            <MdSell className="svg" />
            Sell
          </a>
          <ul>
            <li>
              <a href="#">
                <BsReverseLayoutTextSidebarReverse className="svg" />
                In Progress
              </a>
            </li>
            <li>
              <a href="#">
                <BsClockHistory className="svg" />
                History
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
