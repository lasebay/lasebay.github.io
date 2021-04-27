import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/pic04.jpg';
import pic2 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Projects</h2>
          <p>
            My current interests have led me to explore responsive web and
            native mobile design, as well as multimodal technologies.
          </p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          {/* <h3 className="major">Vitae phasellus</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p> */}

          <section className="features">
            <article>
              <a href="/SSF-Homepage" className="image">
                <img src={pic1} alt="" />
              </a>
              <h3 className="major">SuccessFactors Homepage</h3>
              <p>
                <i>#product-design #responsive-web #ios #android</i>
              </p>
              <p>Reimagining SuccessFactors Homepage</p>
              <a href="/SSF-Homepage" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/CUX-Guidelines" className="image">
                <img src={pic2} alt="" />
              </a>
              <h3 className="major">CUX Guidelines</h3>
              <p>
                <i>#product-design #conversational-design #ios</i>
              </p>
              <p>Streamlining SAP's Conversational UX Guidelines</p>
              <a href="/CUX-Guidelines" className="special">
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
