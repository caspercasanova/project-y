import React, { useState } from 'react';
import styles from './ProductComments.Modules.scss';
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
      <header className={styles.CommentCardHeader}>
        <div>
          <div>Icon</div>
          <h4>Title</h4>
          <h4>date</h4>
        </div>
        <div>
          <button>X</button>
        </div>
      </header>
      <p>Comment</p>
      <h4>Commenter</h4>
      <div>action1bar</div>
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
