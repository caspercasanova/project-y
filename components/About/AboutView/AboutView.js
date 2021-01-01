import React, { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import ReturnPolicy from '../ReturnPolicy/ReturnPolicy';
import Purpose from '../Purpose/Purpose';
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
        <button
          className={page == 'story' && styles.active}
          onClick={() => setPage('story')}>
          Story
        </button>
        <button
          className={page == 'team' && styles.active}
          onClick={() => setPage('team')}>
          team
        </button>
        <button
          className={page == 'returns' && styles.active}
          onClick={() => setPage('returns')}>
          Returns
        </button>
        <button
          className={page == 'purpose' && styles.active}
          onClick={() => setPage('purpose')}>
          purpose
        </button>
        <button
          className={page == 'contactus' && styles.active}
          onClick={() => setPage('contactus')}>
          contactus
        </button>
      </nav>

      {page == 'story' && <Story />}
      {page == 'team' && <Team />}
      {page == 'returns' && <ReturnPolicy />}
      {page == 'purpose' && <Purpose />}
      {page == 'contactus' && <ContactUs />}
    </Main>
  );
}
