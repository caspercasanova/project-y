import React, { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Faq from '../Faq/Faq';
import News from '../News/News';
import Purpose from '../Purpose/Purpose';
import Returns from '../Returns/Returns';
import Team from '../Team/Team';
import styles from './AboutView.module.scss';

export default function AboutView() {
  const [page, setPage] = useState('about');
  return (
    <main className={styles.AboutView}>
      <nav>
        <button onClick={() => setPage('about')}>about</button>
        <button onClick={() => setPage('team')}>team</button>
        <button onClick={() => setPage('faq')}>faq</button>
        <button onClick={() => setPage('news')}>news</button>
        <button onClick={() => setPage('returns')}>returns</button>
        <button onClick={() => setPage('purpose')}>purpose</button>
        <button onClick={() => setPage('contactus')}>
          contactus
        </button>
      </nav>

      {page == 'about' && <Abt />}
      {page == 'team' && <Team />}
      {page == 'faq' && <Faq />}
      {page == 'news' && <News />}
      {page == 'returns' && <Returns />}
      {page == 'purpose' && <Purpose />}
      {page == 'contactus' && <ContactUs />}
    </main>
  );
}

const Abt = () => {
  return (
    <>
      <div>
        <h2>About</h2>
      </div>

      <div>
        <article>
          Project Y Is a business built for and by the people. It aims
          to showcase an emotion and mentality ignored and
          uncapturable by modern media. Project Y is sharp edge in a
          world of dull blades. Money is not the motive. Active
          Movement is.
        </article>
      </div>
      <figure>
        <img />
        <figcaption>
          This is a chart Showing Project Y Sales To Date
        </figcaption>
      </figure>
      <figure>
        <img />
        <figcaption>
          This is a chart showing Project Y Growth
        </figcaption>
      </figure>

      <div>
        <article>
          Project Y was established first as an expirament on business
          models and has since transitioned into a full fledged
          business. Inspiration landed in 2012 and has been cultivated
          since. Website Launched 2020. Business Liscence Unknown.
        </article>
      </div>
    </>
  );
};
