import React from 'react';

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
            <input placeholder="Name" />

            <input placeholder="Email" />

            <input placeholder="Portfolio" />

            <input placeholder="Twitter" />

            <input placeholder="Youtube" />
            <input placeholder="Instagram" />
            <input placeholder="Facebook" />
            <input placeholder="About" />
          </form>
        </div>
      </section>
      <section>
        <h3>Be a Model!</h3>
        <div>
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Portfolio" />
            <input placeholder="Twitter" />
            <input placeholder="Youtube" />
            <input placeholder="Instagram" />
            <input placeholder="Facebook" />
            <input placeholder="About" />
          </form>
        </div>
      </section>
    </div>
  );
}
