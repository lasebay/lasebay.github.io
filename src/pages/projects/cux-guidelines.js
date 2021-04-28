import React from 'react';

import Layout from '../../components/Layout';
import pic1 from '../../assets/images/CUX-Guidelines/CUX_old_vs_new.png';
import pic2 from '../../assets/images/CUX-Guidelines/CUX_Guideline_Sitemap_Analysis.png';
// import pic5 from '../assets/images/pic05.jpg';

import config from '../../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>CUX Guidelines</h2>
          <p>Streamlining SAP's Conversational UX Guidelines</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Summary</h3>
          <p>
            <code>{config.projects[1].hashtags}</code>
          </p>
          <p>
            <i>
              <b>Tools</b>: {config.projects[1].tools}
            </i>
          </p>
          <p>{config.projects[1].summary}</p>

          <br></br>

          <div className="col-12">
            <span className="image fit">
              <img src={pic1} alt="" />
            </span>
          </div>
          <p>
            <i>
              <b>Left</b>: Old CUX site menu. <b>Right</b>: New CUX site menu.
            </i>
          </p>

          <br></br>

          <h3 className="major">Background</h3>
          <p>
            SAP Conversational UX is a design language for enterprise
            conversational products. Its guidelines provide resources and tools
            to design conversational products for business applications.
          </p>

          <br></br>

          <h3 className="major">Define</h3>
          <p>
            The guidelines contained a lot of information that, at first glance,
            may seem overwhelming for someone who is interested in creating
            conversational experiences for enterprise.
          </p>
          <p>
            I took on the task to update and streamline the contents of the
            guidelines and present them in a way that can be easily found and
            understood.
          </p>

          <br></br>

          <h3 className="major">Background Research</h3>
          <div className="col-12">
            <span className="image fit">
              <img src={pic2} alt="" />
            </span>
          </div>

          <p>
            I kicked off the project by looking at existing conversational UX
            guidelines, both internal and external, to get a sense of key topics
            presented in various existing conversational products. I compared
            the guidelines for consumer-facing and enterprise-facing products
            and drew similarities in how different guideline sites organized
            their information to enable digestibility of information.
          </p>
          <p>
            I also gathered inspiration from various digital assistants in
            today’s market—both consumer- and enterprise-facing—and how they
            communicate their standards and guidelines.
          </p>

          <br></br>

          <h3 className="major">Empathize</h3>
          <p>
            After gathering background knowledge in conversation design, I
            proceeded to conduct card sorting and hierarchy studies to
            understand how our audience understands the information we currently
            have and what they hope to take away from our improved guidelines.
          </p>

          <br></br>

          <h3 className="major">Ideate</h3>
          <p>
            After the hierarchy studies, I brainstormed with my team an improved
            sitemap hierarchy with topics that were directly informed by the
            research results and organized in a way that our audience can easily
            navigate. It included some old and some new topics.
          </p>

          <br></br>

          <h3 className="major">Write</h3>
          <p>
            The rest of the work was to update existing topics that we aimed to
            keep in the improved site, create new ones based on the research
            results, and merge any redundant pieces together to streamline the
            overall guidelines.
          </p>

          <br></br>

          <h3 className="major">Assessment</h3>
          <p>
            This project needs to go through more validation with our audience.
            So, the next steps are to share the site articles internally and
            gather feedback on content and overall digestibility from people in
            various roles within conversation design—designers, product
            managers, developers, UA, etc.
          </p>
          <p>
            The goal is to assess whether the revised topics contain content
            that our audiences can find and absorb easily in order to better
            create conversational experiences—no more, no less.
          </p>

          <br></br>

          <a href="/projects" className="button fit">
            Back to Projects
          </a>

          <br></br>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
