import React, { useContext, useState } from 'react'
import styles from './DashBoard.module.css'
import ScoreIcon from '@mui/icons-material/Score';
import Skeleton  from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import axios from '../../utils/axios'
import { AuthContext } from '../../utils/AuthContext';

const DashBoard = () => {

  const [uploadFileText, setUploadFileText] = useState("Upload your resume");
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const [result, setResult] = useState(null)

  const {user} = useContext(AuthContext)

  const handleOnChangeFile = (e) => {
    setResumeFile(e.target.files[0])
    setUploadFileText(e.target.files[0].name)
  }

  const handleUpload = async() => {
    setResult(null)
    if(!jobDesc || !resumeFile) {
      alert("Please fill Job Description & Upload Resume")
      return;
    }
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_desc", jobDesc);
    formData.append("user", user._id);

    setLoading(true)

    try{
      const result = axios.post('/resume/resume', formData)
      setResult((await result).data.data)
    }catch(err) {
      console.log(err)
    }finally{
      setLoading(false)
    }

  }

  return (
    <div className={styles.dashboard}>

      <div className={styles.DashBoardLeft}>

        <div className={styles.DashBoardHeader}>
          <div className={styles.DashBoardHeaderTitle}>Smart Resume Screening</div>
          <div className={styles.DashBoardHeaderLargeTitle}>Resume Match Score</div>
        </div>

        <div className={styles.alertInfo}>
          
          <div>🔔 Important Instructions</div>

          <div className={styles.dashboardInstruction}>
            <div>📋 Please paste the complete job description in the "JOB DESCRIPTION" field before submitting.</div>
            <div>📎 Only PDF format (.pdf) resumes are accepted</div>
          </div>

        </div>

          <div className={styles.dashboardUploadResume}>

            <div className={styles.dashboardUploadResumeBlock}>
              {uploadFileText}
            </div>

            <div className={styles.dashboardUploadInputField}>
              <label htmlFor="inputField" className={styles.uploadBTN}>Upload Resume</label>
              <input type="file" accept=".pdf" id='inputField' onChange={handleOnChangeFile}/>
            </div>

          </div>

          <div className={styles.dashboardJDCArea}>
            <textarea value={jobDesc} onChange={(e) => {setJobDesc(e.target.value)}} className={styles.dashboardJDCAreaText} placeholder='Job Description' rows={10} cols={50}></textarea>

            <div className={styles.dashboardAnalyzeButton} onClick={handleUpload}>Analyze</div>
          </div>

      </div>

      <div className={styles.DashBoardRight}>

        <div className={styles.DashBoardRightTopCard}>

          <div>Analyze with AI</div>

          <img className={styles.profileIMG} src={user?.photoURL} alt="Profile Photo" />

          <h2>{user?.name}</h2>
        </div>

        {
          result && <div className={styles.DashBoardRightTopCard}>

          <div>RESULT</div>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
            <h1>{result?.score}%</h1>
            <ScoreIcon style={{fontSize: '30px'}} />
          </div>

          <div className={styles.dashboardFeedback}>
            <h1>Strength</h1>
            {result?.strength ? (
              <ul>
                {result.strength.split('- ').filter(point => point.trim()).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            ) : (
              <p>No strengths listed</p>
            )}
            <h1>Improvments</h1>
            {result?.improvement ? (
              <ul>
                {result.improvement.split('- ').filter(point => point.trim()).map((point, index) => (
                  <li key={index}>{point.trim()}</li>
                ))}
              </ul>
            ) : (
              <p>No improvements listed</p>
            )}
          </div>
        </div>
        }

        {
          loading && <Skeleton variant="rectangular" width={280} height={280} style={{ borderRadius: '20px' }} />
        }

        

      </div>

    </div>
  )
}

export default WithAuthHOC(DashBoard);
