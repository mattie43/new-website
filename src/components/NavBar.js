import { FaRegNewspaper, FaProjectDiagram } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";

const iconList = [BsHouseFill, FaRegNewspaper, FaProjectDiagram];
const colorList = ["#5e8be6", "#bd5815", "#228b22"];
const iconNames = ["Home", "Resume", "Projects"];

function getIcons(setPageNum) {
  return iconList.map((Ele, i) => {
    return (
      <div
        onClick={() => setPageNum(i + 1)}
        style={{ color: colorList[i] }}
        key={Ele}
      >
        <div className="icon-container">
          <Ele
            size="35"
            className="icon"
            style={{ backgroundColor: colorList[i] }}
          />
        </div>
        {iconNames[i]}
      </div>
    );
  });
}

export default function NavBar(props) {
  return <div className="navbar-container">{getIcons(props.setPageNum)}</div>;
}
