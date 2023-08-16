import React from 'react'
import styles from './projects.module.css';
import Card from './card/Card'

export default function Projects() {
  return (
    <>
      <span id="projects" className={styles['sp']}>P R O J E C T S</span>
      <div className={styles['slider-container']}>
        <div className={styles['band']}></div>
        <Card title="Travel App" src="images/travelapp.png" desc='web site for travel agency' link='https://splendorous-griffin-f62243.netlify.app/'></Card>
        <Card title="Blog" src="images/postsapp.png" desc='Blog app fetches data from posts api' link='https://posts-js-one.vercel.app/'></Card>
        <Card title="Store API's" src="images/store-backend.png" desc='Back-end of an E-commerce store' link='https://github.com/tmtm8976/Store-backend'></Card>
      </div>
    </>
  )
}