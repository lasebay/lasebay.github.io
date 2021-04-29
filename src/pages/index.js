import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/SSF-Homepage/SSF_Logo.png';
import pic2 from '../assets/images/CUX-Guidelines/Chatbot-AI_R_purple.png';
import pic3 from '../assets/images/GT_Logo.png';
import pic4 from '../assets/images/Grady_cross.png';
import pic5 from '../assets/images/Fiserv_FDC.png';
import pica from '../assets/images/pic04.jpg';
import picb from '../assets/images/pic05.jpg';
import picc from '../assets/images/pic06.jpg';
import picd from '../assets/images/pic07.jpg';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-globe"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <p>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { icon, url, name } = social;
              return (
                <li>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href={config.projects[0].url} className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Today</h2>
            <p>
              I’m a UX designer at SAP SuccessFactors, reimagining the HR
              experience straight from its home page.
            </p>
            <a href={config.projects[0].url} className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href={config.projects[1].url} className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Jun 2020 - Jan 2021</h2>
            <p>
              I was part of the team behind SAP's design system (Fiori),
              transforming the guidelines for conversational user experience.
            </p>
            <a href={config.projects[1].url} className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">{config.timeline[0].time}</h2>
            <p>{config.timeline[0].summary}</p>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt spotlight style4">
        <div className="inner">
          <a className="image">
            <img src={pic4} alt="" />
          </a>
          <div className="content">
            <h2 className="major">{config.timeline[1].time}</h2>
            <p>{config.timeline[1].summary}</p>
          </div>
        </div>
      </section>

      <section id="five" className="wrapper spotlight style5">
        <div className="inner">
          <a className="image">
            <img src={pic5} alt="" />
          </a>
          <div className="content">
            <h2 className="major">{config.timeline[2].time}</h2>
            <p>{config.timeline[2].summary}</p>
          </div>
        </div>
      </section>

      {/* <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pica} alt="" />
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
                <img src={picb} alt="" />
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
            <article>
              <a href="/#" className="image">
                <img src={picc} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
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
                <img src={picd} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section> */}
    </section>
  </Layout>
);

export default IndexPage;
