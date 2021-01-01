import React, { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Faq from '../Faq/Faq';
import News from '../News/News';
import Purpose from '../Purpose/Purpose';
import Returns from '../Returns/Returns';
import Team from '../Team/Team';
import styles from './AboutView.module.scss';
import Main from '../../ui/Main/Main';
import Story from '../Story/Story';
export default function AboutView() {
  const [page, setPage] = useState('story');
  return (
    <Main>
      <h1>About Project_Y</h1>
      <nav className={styles.AboutViewNav}>
        <button onClick={() => setPage('story')}>Story</button>
        <button onClick={() => setPage('team')}>team</button>
        <button onClick={() => setPage('faq')}>faq</button>
        <button onClick={() => setPage('news')}>news</button>
        <button onClick={() => setPage('returns')}>returns</button>
        <button onClick={() => setPage('purpose')}>purpose</button>
        <button onClick={() => setPage('contactus')}>
          contactus
        </button>
      </nav>

      {page == 'story' && <Story />}
      {page == 'team' && <Team />}
      {page == 'faq' && <Faq />}
      {page == 'news' && <News />}
      {page == 'returns' && <Returns />}
      {page == 'purpose' && <Purpose />}
      {page == 'contactus' && <ContactUs />}
    </Main>
  );
}
