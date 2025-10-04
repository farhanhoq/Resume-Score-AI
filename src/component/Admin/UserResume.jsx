import React, { useEffect, useState } from 'react'
import styles from './UserResume.module.css'
import Skeleton  from '@mui/material/Skeleton';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import axios from '../../utils/axios';

export const UserResume = () => {

    const {userId} = useParams();
    console.log(userId)

    const [allResume, setAllResume] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const getAllResume = async () => {
        setLoader(true)
        try {
            const result = await axios.get(`/resume/get/${userId}`);
            console.log(result)
            setAllResume(result.data.data);
        } catch (err) {
            console.log(err);
            alert("Something Went Wrong")
        } finally{
            setLoader(false)
        }
        };
        getAllResume();
    }, []);
    
  return (
    <div className={styles.history}>
      <div className={styles.historyCardBlock}>

        {
          loader && 
          <>
          
          <Skeleton variant="rectangular" width={360} height={400} style={{ borderRadius: '20px' }} />
          <Skeleton variant="rectangular" width={360} height={400} style={{ borderRadius: '20px' }} />
          <Skeleton variant="rectangular" width={360} height={400} style={{ borderRadius: '20px' }} />
          
          </>
        }

        
        {
                  allResume?.map((item, index) => {
                    return (
                    <div key={item._id} className={styles.historyCard}>
                    <div className={styles.cardPercantage}>{item?.score}%</div>
                    <h2>Frontend Developer</h2>
                    <p>Resume Name : {item?.resume_name}</p>
                    <h3>Strength</h3>
                    {item?.strength ? (
                      <ul>
                        {item.strength.split('- ').filter(point => point.trim()).map((point, index) => (
                          <li key={index}>{point.trim()}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No strengths listed</p>
                    )}
                    <h3>Improvements</h3>
                    {item?.improvement ? (
                      <ul>
                        {item.improvement.split('- ').filter(point => point.trim()).map((point, index) => (
                          <li key={index}>{point.trim()}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No improvements listed</p>
                    )}
                    <p>Date: {item?.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'N/A'}</p>
                    <p>Time: {item?.updatedAt ? new Date(item.updatedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'N/A'}</p>
                    </div>
        
                    )
                  })        
                }

      </div>
    </div>
  )
}
