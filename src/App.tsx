import React from "react";
import FyloCard from "./components/FyloCard";
import UsageCard from "./components/UsageCard";

import "./styles/main.scss";

function App() {
  return (
    <div className="fylo">
      <FyloCard />
      <UsageCard />
    </div>
  );
}

export default App;
