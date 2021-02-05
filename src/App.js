import "./App.css";
import { Panel } from "./Styled/Panel";
import { Panels } from "./Styled/Panels";
import { useState, useEffect } from "react";
import { BackgroundGrad } from "./Styled/BackgroundGrad";
import { Header } from "./Styled/Header";
import { Content } from "./Styled/Content";
import EmailForm from "./Components/EmailForm";
import Settings from "./Components/Settings";
import About from "./Components/About";
import Projects from "./Components/Projects";
import CV from "./Components/CV";

function App() {
  const [activePanel, setActivePanel] = useState("");
  const [colorOne, setColorOne] = useState([222, 255, 1]);
  const [colorTwo, setColorTwo] = useState([1, 211, 248]);
  const [nightMode, setNightMode] = useState(true);

  useEffect(() => {
    if (window.location.hash !== "") {
      setActivePanel(window.location.hash.slice(1));
    } else {
      setActivePanel("Tom");
    }
  }, []);

  const onPanelClick = (name) => {
    window.location.hash = name;
    setActivePanel(name);
  };

  return (
    <BackgroundGrad colorOne={colorOne} colorTwo={colorTwo}>
      <Panels>
        <Panel
          className={activePanel === "tom" && "active"}
          onClick={() => onPanelClick("tom")}
          active={activePanel === "tom"}
          nightMode={nightMode}
        >
          <Header>Tom</Header>
          {activePanel === "tom" && (
            <Content>
              <About nightMode={nightMode} />
            </Content>
          )}
        </Panel>
        <Panel
          className={activePanel === "projects" && "active"}
          onClick={() => onPanelClick("projects")}
          active={activePanel === "projects"}
          nightMode={nightMode}
        >
          <Header>Projects</Header>
          {activePanel === "projects" && (
            <Content>
              <Projects nightMode={nightMode} />
            </Content>
          )}
        </Panel>
        <Panel
          className={activePanel === "contact" && "active"}
          onClick={() => onPanelClick("contact")}
          active={activePanel === "contact"}
          nightMode={nightMode}
        >
          <Header>Contact</Header>
          {activePanel === "contact" && (
            <Content>
              <h2>Get in contact with me</h2>
              <p>Fill out the form below to send me an email.</p>
              <EmailForm nightMode={nightMode} />
            </Content>
          )}
        </Panel>
        <Panel
          className={activePanel === "cv" && "active"}
          onClick={() => onPanelClick("cv")}
          active={activePanel === "cv"}
          nightMode={nightMode}
        >
          <Header>CV</Header>
          {activePanel === "cv" && (
            <Content>
              <CV />
            </Content>
          )}
        </Panel>
        <Panel
          className={activePanel === "settings" && "active"}
          onClick={() => {
            onPanelClick("settings");
          }}
          active={activePanel === "settings"}
          nightMode={nightMode}
        >
          <Header>Settings</Header>
          {activePanel === "settings" && (
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
