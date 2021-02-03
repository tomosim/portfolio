import React from "react";
import { AboutWrapper } from "../Styled/AboutWrapper";
import { Mugshot } from "../Styled/Mugshot";
import { Paragraph } from "../Styled/Paragraph";
import { LogoWrapper } from "../Styled/LogoWrapper";
import { Logo } from "../Styled/Logo";

const About = ({ nightMode }) => {
  return (
    <AboutWrapper>
      <Mugshot src="./img/me.jpg" alt="A smiling Tom" />
      <Paragraph>Hi, I'm Tom.</Paragraph>
      <Paragraph>
        I'm a lecturer, mentor, and developer living in Berlin.
      </Paragraph>
      <Paragraph>
        I have over two years of experience working in the tech industry, both
        as an educator and a developer. In my previous role at{" "}
        <a href="https://northcoders.com/">Northcoders</a>, a web development
        bootcamp, I lectured students and collaborated on in-house projects
        developing tools for the classroom team.
      </Paragraph>
      <Paragraph>
        I have a very strong understanding of computer science fundamentals,
        backend, and frontend technologies. My greatest strengths stem from my
        experience as a lecturer and mentor; I am empathetic, a good
        communicator, and a team player.
      </Paragraph>
      <Paragraph>
        In my spare time you'll find me at the climbing wall, riding my bike, or
        skating the streets.
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
    </AboutWrapper>
  );
};

export default About;
