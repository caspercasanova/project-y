import React, { useState } from 'react';
import styles from './ReturnPolicy.module.scss';
import Image from 'next/image';
import Section from '../../ui/Section/Section';

export default function ReturnPolicy() {
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
      <Section header={"WHAT IS PROJECT_Y's RETURN POLICY?"}>
        <article>
          <h3>TEMPORARY RETURN EXTENSION</h3>
          <p>
            <b>
              All Project Y purchases have an extended 60-day return
              policy (some exceptions apply).
            </b>
          </p>
          <p>
            <b>
              Due to current transportation delays, it's taking longer
              than usual to process returns and issue refunds. Once we
              receive your items, we’ll process your return and issue
              a refund to your original form of payment.
            </b>
          </p>
          <p>
            We design our shoes and gear to help you perform at peak
            level, so if they're not working exactly right for you,
            we've got you covered. Whether you shop on Nike.com, in
            any of the Project Y apps, or at a Project Y store, we
            provide you 60 days to take your Project Y purchase for a
            trial run, confidently knowing you can return any item{' '}
            <a href={'#'}>(some exceptions apply)</a> for any reason
            within those 60 days. That also includes custom Nike By
            You sneakers. Even after 60 days, you can still return
            items if they’re unworn and unwashed. And remember,
            returns are always free for{' '}
            <a href={'#'}>Project Y Members.</a>
          </p>
        </article>
      </Section>

      <Section header={'FAQs'}>
        <div>
          {qs.map((question, index) => (
            <FAQCard
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Section>
      <Section header={'OTHER TERMS'}>
        <div>
          <p>
            While shopping in store, you may have the option of
            shipping an item to a store to pick up. If you are unable
            to pick up the order within 30 days, we will return your
            order and issue a refund to your original form of payment.
          </p>
          <p>
            We reserve the right to require and electronically capture
            consumer information from a valid state or government ID
            for all returns/exchanges. We maintain a database of
            consumer return activity created solely for the purpose of
            authorizing returns and exchanges. We do not sell the
            information captured through this process. We also reserve
            the right to limit returns/exchanges made with or without
            receipts for any reason.
          </p>
          <Image
            src={'/images/ProjectY.png'}
            height={50}
            width={50}
            alt={'Return Policy Logo'}
          />
        </div>
      </Section>
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
