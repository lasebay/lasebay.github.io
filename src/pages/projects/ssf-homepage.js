import React from 'react';

import Layout from '../../components/Layout';
// import pic5 from '../assets/images/pic05.jpg';

import config from '../../../config';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>SuccessFactors Homepage</h2>
          <p>Reimagining SuccessFactors Homepage</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Summary</h3>
          <p>
            <code>{config.projects[0].hashtags}</code>
          </p>
          <p>
            <i>
              <b>Tools</b>: {config.projects[0].tools}
            </i>
          </p>
          <p>{config.projects[0].summary}</p>

          <br></br>

          <h3 className="major">Background</h3>
          <p>
            The SuccessFactors Homepage is the first thing users see upon
            logging in. It enables users to do what they need to do straight
            from the Homepage or quickly get to where they need to accomplish
            their goal.
          </p>
          <p>
            For a manager, this is where they first see their most urgent and
            important engagements like approving employee training requests,
            reviewing employee performance, or reviewing goals. It adds even
            more to the task when multiple people have sent these requests, and
            all a manager wishes to do is approve them at once.
          </p>

          <br></br>

          <h3 className="major">Define</h3>
          <p>
            Our PM team defined 3 use cases for us to address from the Home
            page:
            <ol>
              <li>
                <em>Toggle View</em> - Ability to toggle between detail view and
                overview.
              </li>
              <li>
                <em>Grouping</em> – Ability to view different categories from
                within a group.
              </li>
              <li>
                <em>Bulk Action</em> – Ability to take action on multiple items
                at once.
              </li>
            </ol>
          </p>

          <br></br>

          <h3 className="major">Ideate</h3>
          <p>
            Extensive user research had already been done by the team to
            understand the user. And, a solution had already been implemented in
            the past release. So, after reviewing the documentation and the past
            iterations, I started exploring mobile-first concepts to redesign
            this solution.
          </p>

          <br></br>

          <h3 className="major">Prototype</h3>
          <p>
            For each use case, I ran 3 iterations of prototypes. Each time, I
            gathered feedback from various perspectives in product,
            accessibility, engineering, and user assistance.
          </p>

          <br></br>

          <h3 className="major">Test</h3>
          <p>
            I ran quick usability tests of the mobile web prototype with a small
            set of users. The tests assessed how users accomplish tasks
            corresponding to each use case.
          </p>
          <p>
            Overall remarks suggest the following:
            <ul>
              <li>
                Users prefer a more intuitive way to toggle between views (e.g.,
                icon placement, visual hierarchy).
              </li>
              <li>
                Users prefer more feedback of bigger actions taken (e.g., after
                a bulk approval).
              </li>
              <li>
                Users prefer to be able to select an item itself for more
                details, instead of a relatively ambiguous icon.
              </li>
            </ul>
          </p>

          <br></br>

          <h3 className="major">Specs Creation</h3>
          <p>
            After testing, I used the usability test results to directly inform
            design refinements, and followed up with Accessibilty and
            Engineering to ensure these refinements do not pose any issues. I'm
            currently finalizing the specs for our engineering team to reference
            during implementation.
          </p>
          <p>
            This project is still ongoing, but I’m happy to talk more about it!
          </p>

          <br></br>

          <ul className="actions fit">
            <li>
              <a href="/" className="button fit">
                Go to Timeline
              </a>
            </li>
            <li>
              <a href="/projects" className="button primary fit">
                Go to Projects
              </a>
            </li>
          </ul>

          <br></br>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
