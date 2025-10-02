import React from 'react'
import styles from './Login.module.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>

        <div className={styles.loginCardTitle}>
            <h2>login</h2>
            <VpnKeyIcon/>
        </div>

        <div className={styles.googleBtn}>
            <GoogleIcon style={{fontSize: 32, color: 'red'}}/>
            Sign in with Google
        </div>

      </div>
    </div>
  )
}
