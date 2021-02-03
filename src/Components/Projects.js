import React from "react";
import OAO1 from "../Images/projects/OAO1.png";
import OAO2 from "../Images/projects/OAO2.png";
import OAO3 from "../Images/projects/OAO3.png";
import NN1 from "../Images/projects/NN1.png";
import NN2 from "../Images/projects/NN2.png";
import NN3 from "../Images/projects/NN3.png";
import E1 from "../Images/projects/E1.jpeg";
import E2 from "../Images/projects/E2.jpeg";
import E3 from "../Images/projects/E3.jpeg";
import { ProjectImage } from "../Styled/ProjectImage";
import { ImageTiler } from "../Styled/ImageTiler";
import { Paragraph } from "../Styled/Paragraph";
import { Logo } from "../Styled/Logo";
import GithubLogoLight from "../Images/logos/github-logo-light.png";
import GithubLogoDark from "../Images/logos/github-logo-dark.png";
import { Center } from "../Styled/Center";
import { Link } from "../Styled/Link";

const Projects = ({ nightMode }) => {
  return (
    <>
      <h2>Things I've done</h2>
      <ul>
        <li>
          <h3>Out and Out Adventure</h3>
          <ImageTiler>
            <ProjectImage src={OAO1} alt="screenshot of front page" />
            <ProjectImage src={OAO2} alt="screenshot of blogs page" />
            <ProjectImage src={OAO3} alt="screenshot of blog entry page" />
          </ImageTiler>
          <Center>
            <a href="https://github.com/tomosim/gatsby-blog">
              <Logo
                src={nightMode ? GithubLogoLight : GithubLogoDark}
                alt="github"
              ></Logo>
            </a>

            <Link href="https://outandoutadventure.co.uk/">
              https://outandoutadventure.co.uk/
            </Link>
          </Center>

          <Paragraph>
            This was a simple blog I made for my sister, Sophie. The idea was to
            make it as easy to maintain as possible for her. With this in mind I
            opted to build the site using Gatsby and Netlify CMS. This allowed
            Sophie to write and edit blog posts in markdown or a rich-text
            format using Netlify's text editor. The Gatsby blog will
            automatically re-build and re-deploy each time Sophie makes a
            change. This successfully allows her to run a blog without having to
            learn how to code or (and more importantly) constantly bug me to do
            all the admin.
          </Paragraph>
          <hr />
        </li>
        <li>
          <h3>Northcoders News</h3>
          <ImageTiler>
            <ProjectImage src={NN1} />
            <ProjectImage src={NN2} />
            <ProjectImage src={NN3} />
          </ImageTiler>
          <Center>
            <a href="https://github.com/tomosim/fe-nc-news">
              <Logo
                src={nightMode ? GithubLogoLight : GithubLogoDark}
                alt="github"
              ></Logo>
            </a>
            <h4>Front End</h4>
            <a href="https://github.com/tomosim/be-nc-news">
              <Logo
                src={nightMode ? GithubLogoLight : GithubLogoDark}
                alt="github"
              ></Logo>
            </a>
            <h4>Back End</h4>

            <Link href="https://toms-nc-news-fe.netlify.app/">
              https://toms-nc-news-fe.netlify.app/
            </Link>
          </Center>
          <Paragraph>
            My fullstack Reddit clone. It is built with React, utilising React
            hooks and CSS Modules, sitting atop a RESTful API built with
            ExpressJS and interacting with a PostgreSQL database. The back end
            was built using full TDD and was done so with Mocha, Chai, and
            Supertest.
          </Paragraph>
          <hr />
        </li>
        <li>
          <h3>E-missions</h3>
          <ImageTiler>
            <ProjectImage src={E3} />
            <ProjectImage src={E1} />
            <ProjectImage src={E2} />
          </ImageTiler>
          <Center>
            <a href="https://github.com/tomosim/project-phase-fe">
              <Logo
                src={nightMode ? GithubLogoLight : GithubLogoDark}
                alt="github"
              ></Logo>
            </a>
            <h4>Front End</h4>
            <a href="https://github.com/jamiemetca/project-phase-be">
              <Logo
                src={nightMode ? GithubLogoLight : GithubLogoDark}
                alt="github"
              ></Logo>
            </a>
            <h4>Back End</h4>
          </Center>
          <Paragraph>
            My final project from my time learning at Northcoders. This was a
            group project where myself and 3 other students were tasked with
            designing and implementing a project of our own choosing.
          </Paragraph>
          <Paragraph>
            We decided to build a mobile app that would gamify lowering your
            transit based carbon emissions. Tell it what mode of transport
            you're going to take, it will track how far you travel, and will
            calculate how much CO2 you produce. The points you score are
            determined by the difference in the amount of CO2 you produced
            compared to the same journey made in a car.
          </Paragraph>
          <Paragraph>
            The app was built using React Native for its cross device
            compatibility and as a challenge for us considering we'd never used
            the tech before. The API was built using ExpressJS and queries a
            MongoDB database.
          </Paragraph>
          <hr />
        </li>
      </ul>
    </>
  );
};

export default Projects;
