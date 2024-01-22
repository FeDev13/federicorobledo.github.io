import { space } from "@/styles/theme";
import {
  GithubIcon,
  ItchIOIcon,
  LinkedInIcon,
  NewTabIcon,
} from "../../components/Icons";
import { H1, H2, H3 } from "../../components/Typography";
import { email, phone } from "../../info";
import {
  asideCn,
  docCn,
  learningHighlightsCn as educationHighlightsCn,
  institutionCn,
  link2Cn,
  linkCn,
  paragraphCn,
  sectionCn,
  skillsListCn,
  highlightsCn as workHighlightsCn,
} from "./cv.css";

import { Metadata } from "next";

const isPDFPrinting = process.env.PDF_PRINTING === "true";

export const metadata: Metadata = {
  title: "Marco Toniut | Curriculum Vitae",
  description:
    "This is my professional Curriculum Vitae in interactive web format - Marco Toniut",
};

function useTargetProps() {
  return isPDFPrinting ? { "data-size": "A4" } : {};
}

export default function CV() {
  const sheetProps = useTargetProps();
  return (
    <div className={docCn} {...sheetProps}>
      <main>
        <H1 id="me">Marco Stefano Toniut</H1>
        <article>
          <section className={sectionCn}>
            <H3 id="systems-engineer">Systems Engineer</H3>
            <p>
              As an independent developer for a significant part of my career,
              {"I've"} tackled diverse tasks across various companies and
              clients, cultivating an eclectic range of technical knowledge and
              a commitment to self-actualization.
            </p>
            <p>
              In leadership, mentoring, and negotiation roles, {"I've "}
              successfully coordinated development teams, championing the
              adoption of modern techniques and tools. Detail-oriented and
              experimental in my coding approach, I prioritize deadlines and
              milestones, planning tasks meticulously for on-time project
              completion.
            </p>
          </section>
          <H2 id="work-experience">Work Experience</H2>
          <hr />
          <section className={sectionCn}>
            <H3 id="prima">Principal Developer</H3>
            <div className={institutionCn}>Prima Assicurazioni UK</div>
            <div>
              <em>Jan 2021 - Present</em>
            </div>
            <p>
              {`Independent developer leading the adoption of a new tech stack for Prima's
    UK branch, a motor insurance company that achieved success in Italy. Focused on
    TypeScript, Elixir, Rust, and Elm.`}
            </p>
            <ul className={workHighlightsCn}>
              <li>Lead development of the public-facing app</li>
              <li>
                Establish and maintain a front-end build/lint/test monorepo,
                incorporating Elm.
              </li>
              <li>
                Engineer Elixir GraphQL APIs for seamless integration with the
                tech architecture.
              </li>
              <li>
                Develop Email and PDF React rendering tools for enhanced user
                communication.
              </li>
              <li>
                Implement and maintain the Cypress integration test environment
                for quality assurance.
              </li>
            </ul>
          </section>

          <section className={sectionCn}>
            <H3 id="moixa-ltd">Senior Software Developer</H3>
            <div className={institutionCn}>Moixa Ltd.</div>
            <div>
              <em>Jun 2019 - Dec 2020</em>
            </div>
            <p>
              {`Senior software developer contributing to the Moixa Gridshare stack, managing charge/
    discharge rates of batteries/EVs in the UK and Japan.`}
            </p>
            <ul className={workHighlightsCn}>
              <li>Sole developer of {"Moixa's"} Hub Installer app</li>
              <li>
                Re-implemented the Japanese weather alert system using AWS ES,
                Dynamo, and SQS.
              </li>
              <li>
                Principal developer of {"Moixa's"} Mobile Customer app v2 (React
                Native).
              </li>
              <li>
                Implemented {"Admin's Commissioner's"} module V3 and other
                associated functionalities.
              </li>
              <li>
                Implemented {"Moixa's"} Styleguide and contributed to front-end
                monorepo refactoring.
              </li>
            </ul>
          </section>
          <section className={sectionCn}>
            <H3 id="freelancer-2016">Freelancer</H3>
            <div>
              <em>Jan 2016 - Jun 2019</em>
            </div>
            <p>
              {`Undertook diverse projects, collaborating with clients across different industries.
    Developed React and Reflex-FRP (Haskell) web applications, showcasing versatility
    in meeting client requirements.`}
            </p>
          </section>

          <section className={sectionCn}>
            <H3 id="propago">Lead Software Developer</H3>
            <div className={institutionCn}>Propago AR</div>
            <p>
              <em>Mar 2014 - Dec 2015</em>
            </p>
            <div>
              {`Led the development of the Full-Stack architecture for Propago’s financial system.
    Provided leadership and training in React technology. Back End developed using
    C#/SQL Server, deployed to Azure.`}
            </div>
            <ul className={workHighlightsCn}>
              <li>Lead a team of six developers</li>
              <li>
                Participated in key company decisions and supervised staff
              </li>
            </ul>
          </section>

          <section className={sectionCn}>
            <H3 id="eventbrite">Software Developer</H3>
            <div className={institutionCn}>Eventbrite</div>
            <div>
              <em>May 2013 - November 2013</em>
            </div>
            <p>
              {`Responsible for fixing and upgrading Eventbrite's Seat Designer app,
    a large HTML/canvas/svg app with extensive UI drag and drop interactivity.`}
            </p>
            <ul className={workHighlightsCn}>
              <li>Improved and refactored their Backbone JS application</li>
              <li>Upgraded their SVG editor rich internet app</li>
            </ul>
          </section>

          <section className={sectionCn}>
            <H3 id="freelancer-2010">Freelancer</H3>
            <div>
              <em>Jan 2010 - May 2013</em>
            </div>
            <p>
              {`Engaged in various projects, collaborating with multiple clients across diverse industries.
    Developed web applications and contributed to game development, showcasing adaptability
    in meeting client requirements.`}
            </p>
          </section>

          <section className={sectionCn}>
            <H3 id="estudio-minero">Web Programmer</H3>
            <div className={institutionCn}>Estudio Minero</div>
            <div>
              <em>Jan 2008 - Jan 2010</em>
            </div>
            <p>
              {`Designed and developed web pages and embedded applications using Flash and Javascript.`}
            </p>
            <ul className={workHighlightsCn}>
              <li>Created static web pages</li>
              <li>Led design and implementation efforts</li>
              <li>Developed Flash web applications (AS3)</li>
              <li>Implemented PHP/Wordpress backend systems</li>
            </ul>
          </section>

          <H2 id="education">Education</H2>
          <hr />

          <section>
            <H3 id="caece">Systems Engineer</H3>
            <div className={institutionCn}>University CAECE Mar del Plata</div>
            <p>
              Computer science. Algorithms, data structures and software
              patterns. Project management. Quality assurance. Electronic
              circuits.
            </p>
          </section>

          <section className={sectionCn}>
            <H3 id="udemy-robotics">
              {"Electricity & Electronics - Robotics, Learn by Building"}
            </H3>
            <div className={institutionCn}>Udemy Academy</div>
            <ul className={educationHighlightsCn}>
              <li>
                <a
                  className={linkCn}
                  href="https://www.udemy.com/course/analog-electronics-robotics-learn-by-building"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Module I - Analog Electronics</span>
                  <NewTabIcon />
                </a>
              </li>
              <li>
                <a
                  className={linkCn}
                  href="https://www.udemy.com/course/digital-electronics-robotics-learn-by-building-module-ii"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Module II - Digital Electronics</span>
                  <NewTabIcon />
                </a>
              </li>
            </ul>
          </section>

          <H2 id="personal-projects">Personal Projects</H2>
          <hr />
          <section className={sectionCn}>
            <H3 id="carcinisation">Project Owner and Developer</H3>
            <div className={institutionCn}>
              <span>Carcinisation (Game Boy inspired game)</span>
              <a
                href="https://github.com/marcotoniut/carcenisation"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
              <a
                href="https://marcotoniut.itch.io/carcinisation"
                rel="noreferrer"
                target="_blank"
              >
                <ItchIOIcon />
              </a>
            </div>
            <div>
              <em>Oct 2023</em>
            </div>
            <p>
              Lead the development of a game prototype for the Game Boy Jam of
              2023, which lasted 15 days. The project was developed using the
              experimental ECS game engine{" "}
              <a href="https://bevyengine.org/">Bevy</a>, which is written in
              Rust.
            </p>
            <ul className={workHighlightsCn}>
              <li>Lead development and coordination of a team of six</li>
              <li>Primary coder and game designer</li>
              <li>Art and story direction</li>
              <li>Assistance on selection of music and sound</li>
            </ul>
          </section>
        </article>
      </main>
      <aside className={asideCn}>
        <section className={sectionCn}>
          <H2 id="contact-details">Contact Details</H2>
          <hr />
          <section className={paragraphCn}>
            <div>
              <a
                className={link2Cn}
                href={`mailto:${email}?subject=Hello Marco!`}
              >
                {email}
              </a>
            </div>
            <div>
              <a className={link2Cn} href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
            <div>London, UK</div>
            <div style={{ display: "flex", gap: space.small }}>
              <a
                href="https://github.com/marcotoniut"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/marco-toniut-4b6a143a/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </div>
          </section>
        </section>
        <section className={sectionCn}>
          <H2 id="skills">Professional Skills</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>Lead software development</li>
            <li>Team management and mentoring</li>
            <li>Software architecture</li>
            <li>Code assessment</li>
            <li>Recruiting</li>
            <li>Negotiation</li>
          </ul>
        </section>
        <section className={sectionCn}>
          <H2 id="knowledge">Software Knowledge</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>Typescript / JS / HTML / CSS</li>
            <li>{"React / Native / NextJS"}</li>
            <li>Angular / Jest / Cypress</li>
            <li>AWS / NodeJS</li>
            <li>Rust / Haskell / Elixir</li>
            <li>SQL (Postgres / SQL-Server)</li>
            <li>DotNet</li>
            <li>Game dev (Bevy / Unity)</li>
            <li>Electronic circuits</li>
          </ul>
        </section>
        <section className={sectionCn}>
          <H2 id="personal">Personal Skills</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>Spanish language</li>
            <li>Digital Painting</li>
            <li>Karate Shotokan</li>
            <li>Tennis</li>
            <li>Bouldering</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
