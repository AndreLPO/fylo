import react from "React";

import "../styles/progressBar.scss";

export default function ProgressBarComponent() {
  return (
    <div className="progressContainer">
      <div className="progressBar"></div>

      <p>0 GB</p>
      <p>1000 GB</p>
    </div>
  );
}
