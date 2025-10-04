import React, { useContext } from 'react'
import styles from './SideBar.module.css'
import { DocumentScanner } from '@mui/icons-material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';

export const SideBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {isLogin, setIsLogin, user, setUser} = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.clear();
        setIsLogin(false);
        setUser(null);
        navigate('/');
    }

  return (
    <div className={styles.sideBar}>
        <div className={styles.sideBarIcon}>
            <DocumentScanner sx={{fontSize:54, marginBottom:2}}/>
            <div className={styles.sideBarTopContent}>Resume Screening</div>
        </div>

        <div className={styles.sideBarOptionsBlock}>

            <Link to={"/dashboard"} className={[styles.sideBarOption, location.pathname === "/dashboard" ? styles.active : null].join(" ")}>
                <DashboardIcon sx={{fontSize:22}}/>
                <div>Dashboard</div>
            </Link>

            <Link to={"/history"} className={[styles.sideBarOption, location.pathname === "/history" ? styles.active : null].join(" ")}>
                <HistoryIcon sx={{fontSize:22}}/>
                <div>History</div>
            </Link>

            {
                user?.role === 'admin' && <Link to={"/admin"} className={[  styles.sideBarOption, location.pathname === "/admin" ? styles.active : null].join(" ")}>
                <AdminPanelSettingsIcon sx={{fontSize:22}}/>
                <div>Admin</div>
            </Link>
            }

            <div onClick={handleLogout} className={styles.sideBarOption}>
                <LogoutIcon sx={{fontSize:22}}/>
                <div>Log Out</div>
            </div>

        </div>
    </div>
  )
}
