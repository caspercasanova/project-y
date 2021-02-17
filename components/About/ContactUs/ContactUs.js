import React from 'react';
import Field from '../../ui/Field/Field';
import styles from './ContactUs.module.scss';
import Section from '../../ui/Section/Section';
export default function ContactUs() {
  const onSubmit = e => {
    e.preventDefault();

    // send something to mail chimp
  };

  return (
    <div>
      <Section header={'Contact'}>
        <div>
          <p>
            For any questions or concerns email us at:
            contact@projectY.com All Emails Received Between Standard
            Business Hours Monday - Friday (9am - 5pm) Will Receive A
            Response Email Within 48 hours. All Emails Received After
            5pm PST Will Be Responded To By Following Business Day Any
            Emails Sent Over The Weekend Will Be Responded To On Next
            Available Business Day
          </p>
        </div>
      </Section>
      <Section>
        <Section header={'Apply for Sponsorship'}>
          <div>
            <form onSubmit={onSubmit}>
              <fieldset className={styles.Sponsorship_FieldSet}>
                <Field placeholder="Name" />
                <Field placeholder="Email" />
                <Field placeholder="Portfolio" />
                <Field placeholder="Twitter" />
                <Field placeholder="Youtube" />
                <Field placeholder="Instagram" />
                <Field placeholder="Facebook" />
                <Field placeholder="About" />
              </fieldset>
            </form>
          </div>
        </Section>
        <Section header={'Be a Model'}>
          <div>
            <form>
              <fieldset className={styles.Sponsorship_FieldSet}>
                <Field placeholder="Name" />
                <Field placeholder="Email" />
                <Field placeholder="Portfolio" />
                <Field placeholder="Twitter" />
                <Field placeholder="Youtube" />
                <Field placeholder="Instagram" />
                <Field placeholder="Facebook" />
                <Field placeholder="About" />
              </fieldset>
            </form>
          </div>
        </Section>
      </Section>
    </div>
  );
}
