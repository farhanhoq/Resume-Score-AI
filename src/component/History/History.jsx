import React from 'react'
import styles from './History.module.css'
import Skeleton  from '@mui/material/Skeleton';

export const History = () => {
  return (
    <div className={styles.history}>
      <div className={styles.historyCardBlock}>

        <Skeleton variant="rectangular" width={280} height={280} style={{ borderRadius: '20px' }} />

        <div className={styles.historyCard}>
          <div className={styles.cardPercantage}>80%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea quidem obcaecati omnis ipsum ad blanditiis eligendi ut soluta vero pariatur, magnam dolorum eius cum optio consequuntur sit rem quos.</p>
          <p>Dated: 2025-05-17</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercantage}>65%</div>
          <h2>Backend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea quidem obcaecati omnis ipsum ad blanditiis eligendi ut soluta vero pariatur, magnam dolorum eius cum optio consequuntur sit rem quos.</p>
          <p>Dated: 2025-05-17</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercantage}>90%</div>
          <h2>Full Stack Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea quidem obcaecati omnis ipsum ad blanditiis eligendi ut soluta vero pariatur, magnam dolorum eius cum optio consequuntur sit rem quos.</p>
          <p>Dated: 2025-05-17</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercantage}>75%</div>
          <h2>Data Scientist</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea quidem obcaecati omnis ipsum ad blanditiis eligendi ut soluta vero pariatur, magnam dolorum eius cum optio consequuntur sit rem quos.</p>
          <p>Dated: 2025-05-17</p>
        </div>

        <div className={styles.historyCard}>
          <div className={styles.cardPercantage}>85%</div>
          <h2>Machine Learning Engineer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea quidem obcaecati omnis ipsum ad blanditiis eligendi ut soluta vero pariatur, magnam dolorum eius cum optio consequuntur sit rem quos.</p>
          <p>Dated: 2025-05-17</p>
        </div>

      </div>
    </div>
  )
}
