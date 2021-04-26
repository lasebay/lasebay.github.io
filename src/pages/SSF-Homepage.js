import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/SSF-Homepage/1_SSF_Explorations.png';
import pic5 from '../assets/images/pic05.jpg';

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
            <i>
              #product-design #responsive-web #ios #android
              <br></br>
              Tools: Sketch, Abstract, Invision, Zeplin
            </i>
          </p>
          <p>
            As part of the SuccessFactors Homepage team, I simplified the
            experience for manager users to work through several approvals and
            other team engagements straight from the Homepage. This project is a
            work in progress for release later in 2021.
          </p>

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

          <h3 className="major">Definition</h3>
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

          <h3 className="major">Explorations</h3>
          <p>
            Extensive user research had already been done by the team to
            understand the user. After reviewing the documentation and past
            iterations, I started my own explorations (mobile-first).
          </p>

          <br></br>

          <h3 className="major">Explorations</h3>
          <p>
            Extensive user research had already been done by the team to
            understand the user. After reviewing the documentation and past
            iterations, I started my own explorations (mobile-first).
          </p>
          <p>
            For each use case, I ran 3 iterations of design, ensuring I got
            proper feedback from PMs, Accessibility, Engineering, and UA.
          </p>

          <br></br>

          <h3 className="major">Specs Creation</h3>
          <p>
            After sharing 3 iterations of explorations with the team and getting
            their feedback, I started to create specs on Zeplin, choosing key
            screens from the prototype for engineering to reference during
            implementation.
          </p>

          <br></br>

          <h3 className="major">Next Steps</h3>
          <p>
            This project is still ongoing, but I’m happy to talk more about it!
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
