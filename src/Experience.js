import * as React from 'react';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';


export function Experience() {
  return (
    <div>
      <DrawerAppBar Content={<ExperienceContent />} />
      <div className='App' id='App-experience'>
        <BackGround />
      </div>
    </div>
  );
}

function ExperienceContent(){
  return (
    <div className='experience-body'>
      <div className='experience-container'>
      <main className='row'>
        <section className='col'>
          <header className='title'>
            <h2>EXPERIENCE</h2>
          </header>
          <div className='contents'>
          <div className='box'>
              <h4>May,2023 - Present</h4>
              <h3>Software Engineer - App developement</h3>
              <p>As a senior full-stack developer with expertise in MERN
                technologies, I have successfully led cross-functional teams
                and independently executed projects, ensuring timely
                delivery while aligning with product requirements.
                Additionally, I collaborated seamlessly with cloud network
                teams to optimize production processes.
              </p>
            </div>
          <div className='box'>
              <h4>May,2022 - April,2023</h4>
              <h3>Associate Engineer - Product developement</h3>
              <p>Proficient in front-end development with ReactJS and
                  well-versed in JavaScript libraries including jQuery, React,
                  and Redux. Skilled in collaborative workflows using Git and
                  GitHub, with a growing understanding of NodeJS.
              </p>
            </div>
            <div className='box'>
              <h4>Jan,2022 - Apr,2022</h4>
              <h3>Full Stack Developer - Trainee</h3>
              <p>learned  python full-stack along with selenium testing.
                worked in movie ticket booking application.
              </p>
            </div>
          </div>
        </section>

        <section className='col'>
          <header className='title'>
            <h2>EDUCATION</h2>
          </header>
          <div className='contents'>
          <div className='box'>
              <h4>2018 - 2022</h4>
              <h3>Bachelor's Degree</h3>
              <p>studied at Institute Of Road And Transport Technology (IRTT).
                 B.Tech - Information Technology course and secured <b>7.6</b> CGPA.
              </p>
            </div>
            <div className='box'>
              <h4>2017 - 2018</h4>
              <h3>High School</h3>
              <p>studied at Kongu National Matric Hr Sec School. 
                 Biology-Maths course and secured <b>86%</b> in 12th standard.</p>
            </div>
            
          </div>
        </section>

      </main>
    </div>
    </div>
  )
}