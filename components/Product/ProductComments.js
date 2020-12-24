import React, { useState } from 'react';

export default function ProductComments() {
  return (
    <section>
      <div>Product Comments</div>
      <div>Product Comments Icon</div>
      <div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
}

const Comment = () => {
  const [open, setOpen] = useState();
  return (
    <article>
      <h3>Title</h3>
      <h4>Commenter</h4>
      <p>Comment</p>
      <div>Icons</div>
    </article>
  );
};
