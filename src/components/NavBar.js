import {
  FaRegNewspaper,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { BsHouseFill, BsEmojiSunglasses } from "react-icons/bs";

export default function NavBar(props) {
  const iconSize = "35";
  return (
    <div className="navbar-container">
      <div onClick={() => props.setPageNum(1)}>
        <div>
          <BsHouseFill
            size={iconSize}
            className="icon"
            style={{ "background-color": "rgb(133, 94, 66)", color: "white" }}
          />
        </div>
        Home
      </div>
      <div onClick={() => props.setPageNum(2)}>
        <div>
          <BsEmojiSunglasses
            size={iconSize}
            className="icon"
            style={{ "background-color": "rgb(224, 172, 105)", color: "white" }}
          />
        </div>
        About Me
      </div>
      <div onClick={() => props.setPageNum(3)}>
        <div>
          <FaRegNewspaper
            size={iconSize}
            className="icon"
            style={{ "background-color": "rgb(128, 64, 0)", color: "white" }}
          />
        </div>
        Resume
      </div>
      <div>
        <div>
          <FaGithub
            size={iconSize}
            className="icon"
            style={{ "background-color": "rgb(79, 84, 90)", color: "white" }}
          />
        </div>
        Github
      </div>
      <div>
        <div>
          <FaLinkedin
            size={iconSize}
            className="icon"
            style={{ "background-color": "rgb(45, 114, 186)", color: "white" }}
          />
        </div>
        LinkeIn
      </div>
      <div>
        <div>
          <FaTwitter
            size={iconSize}
            className="icon"
            style={{ "background-color": "rgb(80, 144, 254)", color: "white" }}
          />
        </div>
        Twitter
      </div>
      <div>
        <div>
          <FaEnvelope
            size={iconSize}
            className="icon"
            style={{ "background-color": "rgb(217, 33, 33)", color: "white" }}
          />
        </div>
        E-Mail
      </div>
    </div>
  );
}
