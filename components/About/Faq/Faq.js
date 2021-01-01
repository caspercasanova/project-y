import React, { useState } from 'react';
import styles from './Faq.module.scss';
export default function FAQ() {
  const qs = [
    {
      question: 'CAN I CHANGE MY ORDER ONCE IT’S PLACED?',
      answer:
        'Once an order is placed we cannot make any changes to sizes or items. We only allow cancellations of orders and refunds. You must contact us as soon as possible to guarantee we can cancel your order before it ships.',
    },
    {
      question:
        'AN ITEM/SIZE IS OUT OF STOCK, WHEN WILL IT BE AVAILABLE AGAIN?',
      answer:
        'We typically do not restock product once it sells out. It is rare if we do a restock, but if we do we only do it for a limited time. Our mailer will give updates for restocks and sizes before anyone else hears about it.',
    },
    {
      question: 'WHERE IS MY ORDER/HOW CAN I TRACK MY ORDER?',
      answer:
        "When you place an order, we will send you an email with all the details including the name of the carrier, the ship date, and the tracking number. If you don't receive the email or have misplaced your tracking number, send us an email at contact@darcsport.com and we will be happy to resend it for you",
    },
    {
      question: 'CAN I ADVERTISE FOR YOU?',
      answer:
        'Sponsorship opportunities are available. Check out the sponsorship page!',
    },
    {
      question:
        'HOW CAN I STAY UP TO DATE ON WHEN RESTOCKING WILL OCCUR?', //
      answer: 'FOLLOW US ON INSTA AND TWITTER SILLY!',
    },
  ];
  return (
    <div>
      <header>This is the Faq</header>
      <section className={styles.Faq_Card_Section}>
        {qs.map((question, index) => (
          <FAQCard
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </section>
    </div>
  );
}

const FAQCard = ({ question, answer }) => {
  return (
    <article className={styles.FAQCard}>
      <header>{question}</header>
      <div>{answer}</div>
    </article>
  );
};
