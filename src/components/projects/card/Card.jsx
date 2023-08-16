import React from 'react';
import styles from './card.module.css';

export default function Card({src, link, title, desc}) {
  return (
    <div className={styles['card-container']}>
      <a href={link} target="_blank">
        <img
          className={"rounded-t-lg w-full"+ styles['image']}
          src={src}
          alt="" />
        <div className={styles['dark-layer']}></div>
        <div className="txt-cont">
          <span className={styles['sp']}>V I S I T</span>
          <h1 className={styles['txt-cont-h1']}>{title}</h1>
          <p className={styles['p']}>{desc}</p>
        </div>
      </a>
    </div>
  )
}