import React, { useState } from 'react'
import styles from './DashBoard.module.css'
import ScoreIcon from '@mui/icons-material/Score';
import Skeleton  from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const DashBoard = () => {

  const [uploadFileText, setUploadFileText] = useState("Upload your resume");
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const handleOnChangeFile = (e) => {
    console.log(e.target.files[0].name)
    setUploadFileText(e.target.files[0].name)
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
            <textarea className={styles.dashboardJDCAreaText} placeholder='Job Description' rows={10} cols={50}></textarea>

            <div className={styles.dashboardAnalyzeButton}>Analyze</div>
          </div>

      </div>

      <div className={styles.DashBoardRight}>

        <div className={styles.DashBoardRightTopCard}>

          <div>Analyze with AI</div>

          <img className={styles.profileIMG} src="https://randomuser.me/api/portraits/men/85.jpg" alt="Profile Photo" />

          <h2>User Name</h2>
        </div>

        {/* <div className={styles.DashBoardRightTopCard}>

          <div>RESULT</div>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
            <h1>75%</h1>
            <ScoreIcon style={{fontSize: '30px'}} />
          </div>

          <div className={styles.dashboardFeedback}>
            <h1>Feedback</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur repellat tenetur ipsum, officia animi et eaque incidunt tempora nisi placeat quam cum fugiat corporis id assumenda deleniti non eligendi corrupti!</p>
          </div>
        </div> */}

        <Skeleton variant="rectangular" width={280} height={280} style={{ borderRadius: '20px' }} />

      </div>

    </div>
  )
}

export default WithAuthHOC(DashBoard);
