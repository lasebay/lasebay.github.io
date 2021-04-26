import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
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

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
