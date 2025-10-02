import React from 'react'
import styles from './Admin.module.css'
import Skeleton  from '@mui/material/Skeleton';

export const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.adminBlock}>

        <Skeleton variant="rectangular" width={280} height={380} style={{ borderRadius: '20px' }} /> 

        <div className={styles.adminCard}>
          <h2>Coding Hungers</h2>
          <p style={{color: 'blue'}}>jdfkjfkj@gmail.com</p>
          <h3>Score : 78%</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere pariatur totam tenetur, labore perferendis dicta voluptatem voluptatum omnis odio odit quae, atque beatae similique, harum quia consequatur dolor illum animi?</p>
        </div>

        <div className={styles.adminCard}>
          <h2>John Doe</h2>
          <p style={{color: 'blue'}}>johndoe@gmail.com</p>
          <h3>Score : 85%</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere pariatur totam tenetur, labore perferendis dicta voluptatem voluptatum omnis odio odit quae, atque beatae similique, harum quia consequatur dolor illum animi?</p>
        </div>

        <div className={styles.adminCard}>
          <h2>Jane Smith</h2>
          <p style={{color: 'blue'}}>janesmith@gmail.com</p>
          <h3>Score : 90%</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere pariatur totam tenetur, labore perferendis dicta voluptatem voluptatum omnis odio odit quae, atque beatae similique, harum quia consequatur dolor illum animi?</p>
        </div>

        <div className={styles.adminCard}>
          <h2>Michael Johnson</h2>
          <p style={{color: 'blue'}}>michaeljohnson@gmail.com</p>
          <h3>Score : 88%</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere pariatur totam tenetur, labore perferendis dicta voluptatem voluptatum omnis odio odit quae, atque beatae similique, harum quia consequatur dolor illum animi?</p>
        </div>

        <div className={styles.adminCard}>
          <h2>Emily Davis</h2>
          <p style={{color: 'blue'}}>emilydavis@gmail.com</p>
          <h3>Score : 92%</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere pariatur totam tenetur, labore perferendis dicta voluptatem voluptatum omnis odio odit quae, atque beatae similique, harum quia consequatur dolor illum animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad ipsa corrupti debitis corporis sapiente, vitae atque sed, expedita doloremque aspernatur quam enim cumque, accusamus a beatae minima id? Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore impedit suscipit et iusto accusamus, harum, tempora omnis odio tempore distinctio magnam voluptas, maiores eveniet minus assumenda hic. Illum, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque.</p>
        </div>

      </div>
    </div>
  )
}
