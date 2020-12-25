import React, { useState } from 'react';
import styles from './ProductComments.Modules.scss';
export default function ProductComments({ comments }) {
  return (
    <section>
      <div>
        <h3>Product Comments</h3>
        <div>Product Comments Icon</div>
      </div>
      <div>
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
      <h3>Title</h3>
      <h4>Commenter</h4>
      <p>Comment</p>
      <div>Icons</div>
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
