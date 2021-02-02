import "./App.css";
import { Panel } from "./Styled/Panel";
import { Panels } from "./Styled/Panels";
import { useState } from "react";
import { BackgroundGrad } from "./Styled/BackgroundGrad";
import { Header } from "./Styled/Header";
import { Content } from "./Styled/Content";

function App() {
  const [activePanel, setActivePanel] = useState(0);
  return (
    <BackgroundGrad>
      <Panels>
        <Panel
          className={activePanel === 0 && "active"}
          onClick={() => setActivePanel(0)}
          active={activePanel === 0}
        >
          <Header>Tom</Header>
          {activePanel === 0 && (
            <Content>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt, rem ea accusamus sunt, nemo unde dolore, autem
                provident possimus consectetur qui similique repellat laudantium
                accusantium earum excepturi quos numquam placeat!{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                quidem at autem voluptatibus repellat earum adipisci nostrum
                velit tempora, vero obcaecati aspernatur veritatis quas
                doloremque dignissimos molestiae hic suscipit perferendis.
              </p>
            </Content>
          )}
        </Panel>
        <Panel
          className={activePanel === 1 && "active"}
          onClick={() => setActivePanel(1)}
          active={activePanel === 1}
        >
          <Header>Projects</Header>
          {activePanel === 1 && <Content></Content>}
        </Panel>
        <Panel
          className={activePanel === 2 && "active"}
          onClick={() => setActivePanel(2)}
          active={activePanel === 2}
        >
          <Header>Contact</Header>
          {activePanel === 2 && <Content></Content>}
        </Panel>
        <Panel
          className={activePanel === 3 && "active"}
          onClick={() => setActivePanel(3)}
          active={activePanel === 3}
        >
          <Header>CV</Header>
          {activePanel === 3 && <Content></Content>}
        </Panel>
        <Panel
          className={activePanel === 4 && "active"}
          onClick={() => setActivePanel(4)}
          active={activePanel === 4}
        >
          <Header>Settings</Header>
          {activePanel === 4 && <Content></Content>}
        </Panel>
      </Panels>
    </BackgroundGrad>
  );
}

export default App;
