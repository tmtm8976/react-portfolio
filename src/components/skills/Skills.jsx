import React from 'react';
import styles from './skills.module.css';

const SkillsComponent = () => {
  const skills = [
    { name: 'HTML', progress: 80 },
    { name: 'CSS', progress: 70 },
    { name: 'JavaScript', progress: 90 },
    { name: 'Angular', progress: 75 },
    { name: 'React', progress: 70 },
    { name: 'Java', progress: 90 },
    { name: 'Nodejs', progress: 75 },
    // Add more skills as needed
  ];

  return (
    <div className={"container"} style={{padding: '50px'}}>
      <h2>Skills</h2>
      <hr />
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6" key={index}>
            <div className={styles["skill"]}>
              <h4>{skill.name}</h4>
              <div className={styles["progress"]}>
                <div
                  className={styles["progress-bar"]}
                  role="progressbar"
                  style={{width: `${skill.progress}%`}}
                >
                  {skill.progress}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent