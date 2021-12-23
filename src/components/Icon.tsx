import react from "React";
import "../styles/icon.scss";

type IconProps = {
  url: string;
};

export default function Icon(props: IconProps) {
  return (
    <div className="icone">
      <img src={props.url} alt="Ícone" />
    </div>
  );
}
