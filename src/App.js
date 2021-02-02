import "./App.css";
import { Panel } from "./Styled/Panel";
import { Panels } from "./Styled/Panels";
import { useState } from "react";
import { BackgroundGrad } from "./Styled/BackgroundGrad";
import { Header } from "./Styled/Header";
import { Content } from "./Styled/Content";
import { Image } from "./Styled/Image";
import EmailForm from "./Components/EmailForm";
import Settings from "./Components/Settings";
import { About } from "./Styled/About";

function App() {
  const [activePanel, setActivePanel] = useState(0);
  const [colorOne, setColorOne] = useState([0, 100, 200]);
  const [colorTwo, setColorTwo] = useState([255, 255, 222, 1]);
  const [nightMode, setNightMode] = useState(true);

  return (
    <BackgroundGrad colorOne={colorOne} colorTwo={colorTwo}>
      <Panels>
        <Panel
          className={activePanel === 0 && "active"}
          onClick={() => setActivePanel(0)}
          active={activePanel === 0}
          nightMode={nightMode}
        >
          <Header>Tom</Header>
          {activePanel === 0 && (
            <Content>
              <About>
                <Image src="/img/me.jpg" alt="A smiling Tom" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt, rem ea accusamus sunt, nemo unde dolore, autem
                  provident possimus consectetur qui similique repellat
                  laudantium accusantium earum excepturi quos numquam placeat!{" "}
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla quidem at autem voluptatibus repellat earum adipisci
                  nostrum velit tempora, vero obcaecati aspernatur veritatis
                  quas doloremque dignissimos molestiae hic suscipit
                  perferendis.
                </p>
              </About>
            </Content>
          )}
        </Panel>
        <Panel
          className={activePanel === 1 && "active"}
          onClick={() => setActivePanel(1)}
          active={activePanel === 1}
          nightMode={nightMode}
        >
          <Header>Projects</Header>
          {activePanel === 1 && <Content></Content>}
        </Panel>
        <Panel
          className={activePanel === 2 && "active"}
          onClick={() => setActivePanel(2)}
          active={activePanel === 2}
          nightMode={nightMode}
        >
          <Header>Contact</Header>
          {activePanel === 2 && (
            <Content>
              <h2>Get in contact with me</h2>
              <p>Fill out the form below to send me an email.</p>
              <EmailForm nightMode={nightMode} />
            </Content>
          )}
        </Panel>
        <Panel
          className={activePanel === 3 && "active"}
          onClick={() => setActivePanel(3)}
          active={activePanel === 3}
          nightMode={nightMode}
        >
          <Header>CV</Header>
          {activePanel === 3 && <Content></Content>}
        </Panel>
        <Panel
          className={activePanel === 4 && "active"}
          onClick={() => setActivePanel(4)}
          active={activePanel === 4}
          nightMode={nightMode}
        >
          <Header>Settings</Header>
          {activePanel === 4 && (
            <Content>
              <Settings
                colorOne={colorOne}
                setColorOne={setColorOne}
                colorTwo={colorTwo}
                setColorTwo={setColorTwo}
                nightMode={nightMode}
                setNightMode={setNightMode}
              />
            </Content>
          )}
        </Panel>
      </Panels>
    </BackgroundGrad>
  );
}

export default App;
