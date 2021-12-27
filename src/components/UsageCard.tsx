import react from "React";
import ProgressBarComponent from "./ProgressBarComponent";

import "../styles/usagecard.scss";
import Mensagem from "./Mensagem";

export default function UsageCard() {
  return (
    <div className="usageCard">
      <p>
        You've used <b>815 GB</b> of your storage
      </p>
      <ProgressBarComponent />
      <Mensagem />
    </div>
  );
}
