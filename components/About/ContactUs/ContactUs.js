import React from 'react';

export default function ContactUs() {
  onSubmit = e => {
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
            <label>Name</label>
            <input placeholder="Name" />
            <label>Email</label>
            <input placeholder="Email" />
            <label>Portfolio</label>
            <input placeholder="Portfolio" />
            <label>Twitter</label>
            <input placeholder="Twitter" />
            <label>Youtube</label>
            <input placeholder="Youtube" />
            <label>Instagram</label>
            <input placeholder="Instagram" />
            <label>Facebook</label>
            <input placeholder="Facebook" />
            <label>About</label>
            <input placeholder="About" />
          </form>
        </div>
      </section>
      <section>
        <h3>Be a Model!</h3>
        <div>
          <form>
            <label>Name</label>
            <input></input>
            <label>Email</label>
            <input></input>
            <label>Portfolio</label>
            <input></input>
            <label>Twitter</label>
            <input></input>
            <label>Youtube</label>
            <input></input>
            <label>Instagram</label>
            <input></input>
            <label>Facebook</label>
            <input></input>
            <label>About</label>
            <input></input>
          </form>
        </div>
      </section>
    </div>
  );
}
