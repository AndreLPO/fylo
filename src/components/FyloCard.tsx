import react from "React";
import logo from "../assets/img/logo.svg";
import document from "../assets/img/icon-document.svg";
import folder from "../assets/img/icon-folder.svg";
import upload from "../assets/img/icon-upload.svg";
import Icon from "./Icon";

import "../styles/fylocard.scss";

export default function FyloCard() {
  return (
    <div className="card">
      <img src={logo} alt="Logo da Fylo em SVG" />
      <div className="iconsList">
        <Icon url={document} />
        <Icon url={folder} />
        <Icon url={upload} />
      </div>
    </div>
  );
}
