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
            <h2>EDUCATION</h2>
          </header>
          <div className='contents'>
            <div className='box'>
              <h4>2017 - 2018</h4>
              <h3>High School</h3>
              <p>studied at Kongu National Matric Hr Sec School. 
                taken Biology-Maths course and secured <b>86%</b> in 12th standard.</p>
            </div>
            <div className='box'>
              <h4>2018 - 2022</h4>
              <h3>Bachelor's Degree</h3>
              <p>studied at Institute Of Road And Transport Technology (IRTT).
                taken B.Tech - Information Technology course and secured <b>7.6</b> CGPA.
              </p>
            </div>
          </div>
        </section>

        <section className='col'>
          <header className='title'>
            <h2>EXPERIENCE</h2>
          </header>
          <div className='contents'>
            <div className='box'>
              <h4>Jan,2022 - Apr,2022</h4>
              <h3>Full Stack Developer - Internship</h3>
              <p>learned  python full-stack along with selenium testing.
                worked in movie ticket booking application.
              </p>
            </div>
            <div className='box'>
              <h4>May,2022 - Present</h4>
              <h3>Associate Engineer - Product developement</h3>
              <p>I have played a front-end role with reactjs-framework. worked in various javascript libraries, as I also
                had look on nodejs. learned more about work collabration using git, github.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
    </div>
  )
}