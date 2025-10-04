import React, { useEffect, useState } from 'react'
import styles from './Admin.module.css'
import Skeleton  from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import axios from '../../utils/axios'
import { useNavigate } from 'react-router-dom';

 const Admin = () => {

  const [allUser, setAllUser] = useState([])
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();

  
  useEffect(() => {
    const getAllUsers = async () => {
      setLoader(true)
      try {
        const result = await axios.get('/user/users')
        setAllUser(result.data.data)

      } catch (err) {
        console.log(err);
        alert("Something Went Wrong")
      } finally{
        setLoader(false)
      }
    };

    getAllUsers();
  }, [])

  const getResume = (id) => {
  navigate(`/userResume/${id}`)
};

  return (
      <div className={styles.admin}>
        <div className={styles.userList}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              
              {
                allUser?.map((item, index) =>  {
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <button onClick={() => getResume(item._id)} className={styles.resumeButton}>
                          View Resume
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
        </div>
      </div>
)
}

export default WithAuthHOC(Admin);
