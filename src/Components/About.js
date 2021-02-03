import React from "react";
import { AboutWrapper } from "../Styled/AboutWrapper";
import { Mugshot } from "../Styled/Mugshot";
import { Paragraph } from "../Styled/Paragraph";
import { LogoWrapper } from "../Styled/LogoWrapper";
import { Logo } from "../Styled/Logo";
import Me from "../Images/me.jpg";
import GithubLogoLight from "../Images/logos/github-logo-light.png";
import GithubLogoDark from "../Images/logos/github-logo-dark.png";
import LinkedInLogoLight from "../Images/logos/linkedin-logo-light.png";
import LinkedInLogoDark from "../Images/logos/linkedin-logo-dark.png";

const About = ({ nightMode }) => {
  return (
    <AboutWrapper>
      <Mugshot src={Me} alt="A smiling Tom" />
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
            src={nightMode ? LinkedInLogoLight : LinkedInLogoDark}
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/tomosim">
          <Logo
            src={nightMode ? GithubLogoLight : GithubLogoDark}
            alt="github"
          />
        </a>
      </LogoWrapper>
    </AboutWrapper>
  );
};

export default About;
