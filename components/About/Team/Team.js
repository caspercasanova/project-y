import React, { useState } from 'react';
import DoublePieChart from '../../graphs/DoublePieChart';
import styles from './Team.module.scss';
import Section from '../../ui/Section/Section';

export default function Team() {
  // fetch employees
  // name:
  // pic
  // socials: {twitter: github:}
  // story:
  return (
    <div>
      <Section header={'THE CREW'}>
        <div>
          <p>
            We believe people are at their best when they have what
            they need. Our philosophy informs everything we do—from
            our collaboration with clients to our enduring
            relationships with our co-workers to our commitment to
            building solid and true products.
          </p>
          <p>At Project Y we value</p>
          <p>
            <b>Inclusion</b>: Come as you are. You are safe here.
          </p>
          <p>
            <b>Autonomy</b>: We trust you to make good decisions and
            get your work done.
          </p>
          <p>
            <b>Craft</b>: Level up. We’re always working to improve
            ourselves through practice, peer review, teamwork, and
            communication.
          </p>
        </div>
      </Section>
      <Section header={'Employees'}>
        <article>
          <div>Employee Card</div>
          <div>Twitter</div>
        </article>
      </Section>

      <Section header={'Family Stats'}>
        <div>
          <div>total employees</div>
          <div>11% full remote</div>
          <div>5 Global Locations</div>
          <div>Unlimited Sick Leave</div>
          <div>4% Retirement Matching</div>
        </div>
      </Section>
      <Section header={'Salaries'}>
        <figure className={styles.FigContainer}>
          <DoublePieChart />
        </figure>
      </Section>
      <Section header={'Salaries Adjusted for Inflation'}>
        <figure className={styles.FigContainer}>
          <DoublePieChart />
        </figure>
      </Section>
    </div>
  );
}
