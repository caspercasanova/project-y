import React, { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import ReturnPolicy from '../ReturnPolicy/ReturnPolicy';
import Purpose from '../Purpose/Purpose';
import Team from '../Team/Team';
import styles from './AboutView.module.scss';
import Main from '../../ui/Main/Main';
import Story from '../Story/Story';
import RobinhoodNav from '../../ui/RobinhoodNav/RobinhoodNav';

export default function AboutView() {
  const [page, setPage] = useState('story');
  return (
    <Main>
      <section className={styles.AboutSection}>
        <h1>About Project_Y</h1>
        <RobinhoodNav
          currentlyActive={page}
          setPage={setPage}
          pages={[
            { name: 'story' },
            { name: 'team' },
            { name: 'returns' },
            { name: 'purpose' },
            { name: 'contactus' },
          ]}
        />

        {page == 'story' && <Story />}
        {page == 'team' && <Team />}
        {page == 'returns' && <ReturnPolicy />}
        {page == 'purpose' && <Purpose />}
        {page == 'contactus' && <ContactUs />}
      </section>
    </Main>
  );
}
