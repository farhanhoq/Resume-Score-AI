import React from 'react'
import styles from './DashBoard.module.css'

export const DashBoard = () => {
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
              Upload Resume
            </div>

            <div className={styles.dashboardUploadInputField}>
              <label htmlFor="inputField" className={styles.uploadBTN}>Upload Resume</label>
              <input type="file" accept=".pdf" id='inputField' />
            </div>

          </div>

          <div className={styles.dashboardJDCArea}>
            <textarea className={styles.dashboardJDCAreaText} placeholder='Job Description' rows={10} cols={50}></textarea>

            <div className={styles.dashboardAnalyzeButton}>Analyze</div>
          </div>

      </div>

    </div>
  )
}
