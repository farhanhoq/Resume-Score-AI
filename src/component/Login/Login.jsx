import React, { useContext } from 'react'
import styles from './Login.module.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';


export const Login = () => {

    const {isLogin, setIsLogin, user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoin = async() => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }

            await axios.post("/user/user", userData).then(response => {
                setUser(response.data.user);
                localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            }).catch(error => {
                console.error(error);
            });

            setIsLogin(true);
            localStorage.setItem("isLogin", true);

            navigate("/dashboard");
        } catch (error) {
            alert("Login Failed")
            console.log(error);
        }
    }

  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>

        

        <div className={styles.loginCardTitle}>
            <h2>login</h2>
            <VpnKeyIcon/>
        </div>

        <div className={styles.googleBtn} onClick={handleLoin}>
            <GoogleIcon style={{fontSize: 32, color: 'red'}}/>
            Sign in with Google
        </div>

      </div>
    </div>
  )
}
