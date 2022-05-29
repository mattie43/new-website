import {
  FaRegNewspaper,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { BsHouseFill, BsEmojiSunglasses } from "react-icons/bs";

const iconList = [
  BsHouseFill,
  BsEmojiSunglasses,
  FaRegNewspaper,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
];
const colorList = [
  "rgb(133, 94, 66)",
  "rgb(224, 172, 105)",
  "rgb(203,96,21)",
  "rgb(79, 84, 90)",
  "rgb(45, 114, 186)",
  "rgb(80, 144, 254)",
  "rgb(217, 33, 33)",
];
const iconNames = [
  "Home",
  "About Me",
  "Resume",
  "Github",
  "LinkedIn",
  "Twitter",
  "E-mail",
];

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
