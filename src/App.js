
import './App.css';
import React, { useState } from 'react';


function Learner(props) {
  const [learnerData, setLearnerData] = useState({
    learners: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
        scores: [
          {
            date: '2018-02-08',
            score: 77
          },
          {
            date: '2018-04-22',
            score: 92
          },
          {
            date: '2018-09-15',
            score: 68
          }
        ]
      },
      {
        name: 'Holly Baird',
        bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
        scores: [
          {
            date: '2018-12-14',
            score: 88
          },
          {
            date: '2019-01-09',
            score: 79
          },
          {
            date: '2019-02-23',
            score: 91
          },
          {
            date: '2019-03-01',
            score: 95
          }
        ]
      },
      {
        name: 'Wes Mungia',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
        scores: [
          {
            date: '2018-10-11',
            score: 62
          },
          {
            date: '2018-11-24',
            score: 74
          },
          {
            date: '2019-01-01',
            score: 86
          }
        ]
      }
    ]
  });
  return (
    <>
    <div>
      <ul>
        {learnerData.learners.map((learner, index) => (
          <li key={index}>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <h3>Scores</h3>
            <ul>
              {learner.scores.map((score, index) => (
                <li key={index}>
                  <p>Date: {score.date}</p>
                  <p>Score: {score.score}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
    </>
);
}

  function App(){
  return (
    <div className="App">
      <Learner />
    </div>
  );
}

export default App;
