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
import { Paragraph } from "./Styled/Paragraph";
import { Emoji } from "./Styled/Emoji";
import { Logo } from "./Styled/Logo";
import { LogoWrapper } from "./Styled/LogoWrapper";

function App() {
  const [activePanel, setActivePanel] = useState(0);
  const [colorOne, setColorOne] = useState([0, 240, 255]);
  const [colorTwo, setColorTwo] = useState([255, 80, 222, 1]);
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
                <Image src="img/me.jpg" alt="A smiling Tom" />
                <Paragraph>Hi, I'm Tom.</Paragraph>
                <Paragraph>
                  I'm a lecturer, mentor, and developer living in Berlin.
                </Paragraph>
                <Paragraph>
                  I have over two years of experience working in the tech
                  industry, both as an educator and a developer. In my previous
                  role at <a href="https://northcoders.com/">Northcoders</a>, a
                  web development bootcamp, I lectured students and collaborated
                  on in-house projects developing tools for the classroom team.
                </Paragraph>
                <Paragraph>
                  I have a very strong understanding of computer science
                  fundamentals, backend, and frontend technologies. My greatest
                  strengths stem from my experience as a lecturer and mentor; I
                  am empathetic, a good communicator, and a team player.
                </Paragraph>
                <Paragraph>
                  In my spare time you'll find me at the climbing wall, riding
                  my bike, or skating the streets.
                </Paragraph>
                <LogoWrapper>
                  <a href="https://www.linkedin.com/in/tom-sim/">
                    <Logo
                      src={
                        nightMode
                          ? "./img/linkedin-logo-light.png"
                          : "./img/linkedin-logo-dark.png"
                      }
                      alt="linkedin"
                    />
                  </a>
                  <a href="https://github.com/tomosim">
                    <Logo
                      src={
                        nightMode
                          ? "./img/github-logo-light.png"
                          : "./img/github-logo-dark.png"
                      }
                      alt="github"
                    />
                  </a>
                </LogoWrapper>
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
