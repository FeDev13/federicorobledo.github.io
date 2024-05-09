import { space } from "@/styles/theme";
import {
  GithubIcon,
  ItchIOIcon,
  LinkedInIcon,
  NewTabIcon,
} from "../components/Icons";
import { H1, H2, H3 } from "../components/Typography";
import { email, phone } from "../info";
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
} from "../app/cv/cv.css";
import { isPDFPrinting } from "../env";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federico Robledo | Curriculum Vitae",
  description:
    "professional Curriculum Vitae in interactive web format",
};

function useTargetProps() {
  return isPDFPrinting() ? { "data-size": "A4" } : {};
}

export default function CV() {
  const sheetProps = useTargetProps();
  return (
    <div {...sheetProps} className={docCn}>
      <main>
        <H1 id="me">Federico Robledo</H1>
        <article>
          <section className={sectionCn}>
            <H3 id="systems-engineer">Lawyer</H3>
            <p>
            {"I'm"} a lawyer with 8 years of experience in different legal areas such as Civil, Family, and Healthcare Law during my career {"I've" }tackled diverse cases across various areas and dealt with different clients, which have made me an experienced professional and provided me with numerous skills
During my career I had the opportunity to work in important cases that required teamwork, taking leadership and mentoring colleagues as well, always striving to promote free thinking and innovative solutions. Currently, I am focusing on litigation against private healthcare providers that deny treatments, and medications or in some way violate patients rights
            </p>
          </section>
          <H2 id="work-experience">Work Experience</H2>
          <hr />
          <section className={sectionCn}>
            <H3 id="fintern">Attorney at Law</H3>
            <div className={institutionCn}>Maro & Asoc.</div>
            <div>
              <em>Feb 2016 - Present</em>
            </div>
            <p>
              {`As one of the main partners, I was in charge of meeting up with clients, analizing the best possible strategy for the case,
              negotiating with other parties and attend court hearings`}
            </p>
            <p>
              {`In this role, I focus on making the best possible decisions, guiding the team, and mentoring junior colleagues. My 
    responsibilities include negotiation with claimant/defendant, drafting settlements, taking testimonials and drafting legal documents.`}
            </p>
            
          </section>

          <section className={sectionCn}>
            <H3 id="bondsmith-zelt">Intern</H3>
            <div className={institutionCn}>Buenos Aires Province Judicial Branch</div>
            <div>
              <em>Mar 2012 - Sept 2012</em>
            </div>
            <p>
              {`As an intern at the Judiciary, I gained extensive experience in the internal operations of the city's civil courts and in providing assistance to the general public `}
            </p>
            <ul className={workHighlightsCn}>
              <li>
                {`Managing case files, including filing documents, organizing records, and maintaining databases.`}
              </li>
              <li>
                {`Assisting during court proceedings by preparing courtroom materials, managing exhibits, and coordinating logistics.`}
              </li>
              <li>
                {`Performing administrative tasks such as scheduling hearings, managing calendars, and processing paperwork related to court proceedings.`}
              </li>
              <li>
                {`Drafting various legal documents such as orders, judgments, and correspondence under the supervision of judges or attorneys.`}
              </li>
            </ul>
          </section>

          <section className={sectionCn}>
            <H3 id="prima">Legal assistant</H3>
            <div className={institutionCn}>Roca & Asoc</div>
            <div>
              <em>Jan 2010 - Feb 2012</em>
            </div>
            <p>
              {`Legal assistant in charge of administrative duties at Roca & Asoc law fim.`}
            </p>
            <ul className={workHighlightsCn}>
              <li> Conducting research on legal issues, statutes, regulations, and case law to support lawyers in preparing cases and legal documents</li>
              <li>
              Assisting in the preparation of legal documents such as contracts, pleadings, motions, briefs, and other legal correspondence..
              </li>
              <li>
              Managing case files, including organizing documents, maintaining records, and tracking deadlines and court appearances..
              </li>
              <li>
              Interacting with clients to gather information, provide updates on case status, and assist with paperwork and documentation.
              </li>
              <li>
              Using legal software and databases to organize and maintain case-related information and documents.
              </li>
              <li>
              Performing various administrative tasks such as scheduling appointments, managing calendars, and handling correspondence.
              </li>
            </ul>
          </section>

          

          <H2 id="education">Education</H2>
          <hr />

          <section>
            <H3 id="caece">Lawyer</H3>
            <div className={institutionCn}>Universidad Nacional de Mar del Plata</div>
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
            <div>Mar del Plata, Argentina</div>
            
          </section>
        </section>
        <section className={sectionCn}>
          <H2 id="skills">Professional Skills</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>Family Law</li>
            <li>Civil Law</li>
            <li>Healtcare Law</li>
            <li>Team management and mentoring</li>
            <li>Contract drafting</li>
            <li>Negotiating</li>
            <li>Settlements</li>
            <li>Arbitration</li>
          </ul>
        </section>
        
        <section className={sectionCn}>
          <H2 id="personal">Personal</H2>
          <hr />
          <ul className={skillsListCn}>
            <li>English (fluent)</li>
            <li>Chinese (basic) </li>
            <li>German (basic)</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
