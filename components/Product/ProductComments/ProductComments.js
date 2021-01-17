import React, { useState } from 'react';
import styles from './ProductComments.module.scss';

export default function ProductComments({ comments }) {
  return (
    <section className={styles.CommentSection}>
      <header className={styles.CommentSectionHeader}>
        <h3>Product Comments</h3>
        <div>Product Comments Icon</div>
      </header>
      <div className={styles.CommentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div>Must Login & Purchase To Leave A Review</div>
    </section>
  );
}

const Comment = () => {
  return (
    <article className={styles.CommentCard}>
      <header className={styles.Commenter}>
        <div className={styles.CommenterProfile}>
          <div className={styles.CommenterProfilePic}>Img</div>
          <div>
            <h4>Tony Blair</h4>
            <h6>8 products in account</h6>
          </div>
        </div>
        <h6>1 review</h6>
      </header>
      <aside className={styles.CommentPortion}>
        <header>
          <div>Img</div>
          <div>
            <h4>Recommended</h4>
            <h6>12 Days Since Purchase</h6>
          </div>
        </header>
        <main>
          <p>
            Full version: I missed this when it was on the free play
            weekend, but have been curious about this title for a long
            time, and I picked it up during a sale. I played it for a
            bit, and then looked at the steam reviews to see if anyone
            else was thinking the same thing; how the hell did this
            get such high review scores?
          </p>
        </main>
        <footer>
          <h6>Was This review Helpful?</h6>
          <div className={styles.HelpfulButtons}>
            <div>Yes</div>
            <div>Award</div>
            <div>Funny</div>
            <div>No</div>
          </div>
          <h6>15 people found this funny</h6>
          <h6>16 people found this useful</h6>
        </footer>
      </aside>
    </article>
  );
};

const LeaveReview = () => {
  const submitHandler = event => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          {' '}
          Leave A Commit
          <input></input>
        </label>
        <label>
          {' '}
          Leave A Score
          <input></input>
        </label>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};
