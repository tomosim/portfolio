import "./App.css";
import { Panel } from "./Styled/Panel";
import { Panels } from "./Styled/Panels";
import { useState } from "react";
import { BackgroundGrad } from "./Styled/BackgroundGrad";

function App() {
  const [activePanel, setActivePanel] = useState(0);
  return (
    <BackgroundGrad>
      <Panels>
        <Panel
          className={activePanel === 0 && "active"}
          onClick={() => setActivePanel(0)}
        ></Panel>
        <Panel
          className={activePanel === 1 && "active"}
          onClick={() => setActivePanel(1)}
        ></Panel>
        <Panel
          className={activePanel === 2 && "active"}
          onClick={() => setActivePanel(2)}
        ></Panel>
        <Panel
          className={activePanel === 3 && "active"}
          onClick={() => setActivePanel(3)}
        ></Panel>
        <Panel
          className={activePanel === 4 && "active"}
          onClick={() => setActivePanel(4)}
        ></Panel>
      </Panels>
    </BackgroundGrad>
  );
}

export default App;
