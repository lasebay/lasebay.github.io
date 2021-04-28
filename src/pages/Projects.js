import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/SSF-Homepage/SSF_Homepage.png';
import pic2 from '../assets/images/CUX-Guidelines/CUX_Homepage.png';

import config from '../../config';

const project0 = config.projects[0];
const project1 = config.projects[1];

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
              <a href={project0.url} className="image">
                <img src={pic1} alt="" />
              </a>
              <h3 className="major">{project0.name}</h3>
              <p>{project0.subheading}</p>
              <p>{project0.hashtags}</p>
              <a href={project0.url} className="special">
                Learn more
              </a>
            </article>

            <article>
              <a href={project1.url} className="image">
                <img src={pic2} alt="" />
              </a>
              <h3 className="major">{project1.name}</h3>
              <p>{project1.subheading}</p>
              <p>{project1.hashtags}</p>
              <a href={project1.url} className="special">
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
