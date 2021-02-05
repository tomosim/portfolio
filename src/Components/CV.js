import React from "react";
import { Horizontal } from "../Styled/Horizontal";
import { Vertical } from "../Styled/Vertical";
import { Paragraph } from "../Styled/Paragraph";

const CV = () => {
  return (
    <>
      <Horizontal>
        <h2>Tom Simmons</h2>
        <h2>27/05/1993</h2>
      </Horizontal>

      <h3>About Me</h3>
      <p>
        A mentor and lecturer at an intensive coding bootcamp. I have developed
        a unique set of skills working as an educator that make me an effective
        and compassionate team player. Teaching has taught me empathy and an
        ability to view problems from multiple perspectives. I pride myself on
        being a good communicator and I have a passion for developing new skills
        and sharing what I have learnt.
      </p>
      <hr />
      <h3>Technical Skills</h3>
      <Horizontal>
        <Vertical>
          <h4>Proficient in:</h4>
          <ul>
            <li>Javascript/Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>TDD (Mocha/Chai/Jest)</li>
            <li>Git</li>
          </ul>
        </Vertical>
        <Vertical>
          <h4>Experience with:</h4>
          <ul>
            <li>Golang</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Google Cloud</li>
            <li>Swift</li>
            <li>Cypress</li>
            <li>Python</li>
          </ul>
        </Vertical>
      </Horizontal>
      <hr />
      <h3>Experience</h3>
      <ul>
        <li>
          <h4>NORTHCODERS, Manchester - August 2018 - December 2020</h4>
          <p>
            My over arching role was to help students to learn and understand
            new and often complicated concepts in a fast paced environment. To
            do this I had to develop an ability to tailor explanations from
            student to student on the fly. Stepping out of my own mental model
            in order to approach the same problem from the perspective of
            different students was a humbling process and has ultimately helped
            me to solidify my own understanding and problem solving skills.
          </p>
          <p>
            As a lecturer, I developed my confidence and public speaking skills.
            I now feel comfortable speaking to large groups and communicating
            ideas and concepts clearly and effectively.
          </p>
          <p>
            Researching new technologies and industry practices is an important
            task I have in order to keep the curriculum relevant. This is done
            through staff training as well as independent learning. I regularly
            use what I’ve learnt to create software based classroom solutions
            and learning resources.
          </p>
          <p>
            I have gained experience developing production level software with
            an Agile workflow by being a part of in-house development teams
            building software solutions for the classroom.
          </p>
        </li>
        <li>
          <h4>NORTHCODERS, Manchester - April 2018 - July 2018</h4>
          <p>
            A full time, 12 week coding bootcamp located in Manchester. The
            course aims to get students to a standard where they can easily
            enter the industry as a junior full stack developer as soon as they
            graduate. Whilst on the course, not only did I learn how to code
            proficiently in Javascript and a number of other, current
            technologies, but I also learnt best practices for a developer such
            as TDD, pair programming, working to sprints, and version control.
          </p>
        </li>
      </ul>
      <hr />
      <h3>Education</h3>
      <ul>
        <li>
          <h4>Nottingham Trent University - June 2017</h4>
          <h5>Diploma of Higher Education: Physics w/ Astronomy</h5>
        </li>
        <li>
          <h4>University Centre In Svalbard (UNIS) - December 2015</h4>
          <h5>The Middle Polar Atmosphere (15 ECTS)</h5>
          <h5>Polar Meteorology and Climate (15 ECTS)</h5>
        </li>
        <li>
          <h4>A LEVELS, Ibstock Place School, Roehampton - June 2011</h4>
          <h5>Biology - B</h5>
          <h5>Maths - B</h5>
          <h5>Physics - B</h5>
        </li>
      </ul>
      <hr />
      <h3>Skills and Interests</h3>
      <h4>Skills</h4>
      <ul>
        <li>Full driving License</li>
        <li>Arctic/Firearm safety trained</li>
        <li>Achieved Duke of Edinburgh Silver Award</li>
      </ul>
      <h4>Hobbies</h4>
      <p>
        Rock climbing, skateboarding, cycling (I cycled from Manchester to
        Berlin in Summer 2020), and pub quizzes (I was even on BBC2’s Eggheads
        once).
      </p>
    </>
  );
};

export default CV;
