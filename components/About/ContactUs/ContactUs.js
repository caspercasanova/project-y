import React from 'react';
import Field from '../../ui/Field/Field';
export default function ContactUs() {
  const onSubmit = e => {
    e.preventDefault();

    // send something to mail chimp
  };

  return (
    <div>
      <section>
        <h3>CONTACT</h3>
        <div>
          For any questions or concerns email us at:
          contact@darcsport.com All Emails Received Between Standard
          Business Hours Monday - Friday (9am - 5pm) Will Receive A
          Response Email Within 48 hours. All Emails Received After
          5pm PST Will Be Responded To By Following Business Day Any
          Emails Sent Over The Weekend Will Be Responded To On Next
          Available Business Day
        </div>
      </section>

      <section>
        <h3>Apply for SponsorShip</h3>
        <div>
          <form onSubmit={onSubmit}>
            <Field placeholder="Name" />
            <Field placeholder="Email" />
            <Field placeholder="Portfolio" />
            <Field placeholder="Twitter" />
            <Field placeholder="Youtube" />
            <Field placeholder="Instagram" />
            <Field placeholder="Facebook" />
            <Field placeholder="About" />
          </form>
        </div>
      </section>
      <section>
        <h3>Be a Model!</h3>
        <div>
          <form>
            <Field placeholder="Name" />
            <Field placeholder="Email" />
            <Field placeholder="Portfolio" />
            <Field placeholder="Twitter" />
            <Field placeholder="Youtube" />
            <Field placeholder="Instagram" />
            <Field placeholder="Facebook" />
            <Field placeholder="About" />
          </form>
        </div>
      </section>
    </div>
  );
}
