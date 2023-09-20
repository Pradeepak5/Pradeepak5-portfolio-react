import * as React from 'react';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';
import img from './assets/pradeep.jpeg';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div>
      <DrawerAppBar Content={<AboutContent />}/>
      <div className='App' id='App-about'>
        <BackGround />
      </div>
    </div>
  );
}

function AboutContent(){
  return (
    <div className='about-body'>
      <section className="about" id="about">
            <div className="max-width">
                <div className="about-content">
                    <div className="column left">
                        <img src={img} alt="Pradeep" />
                    </div>
                    <div className="column right">
                        <div className="text">I'am Pradeep Kumar A - <span>Software Engineer</span></div>
                        <p>• Interested in building large scale application and problem solving. </p>
                        <p>• I not wise to limit myself. Ready to learn new technologies.</p>
                        <p>• Have experience in frontend, backend development, and worked with cloud team for production.</p>
                        <p>• Experienced in technologies like JavaScript, Java, Nodejs, HTML, CSS, ReactJS, Redux, NextJS, Restful APIs, KOTLIN, MongoDB, Sqlite, Mysql, Azure devops, Socket.io. </p>
                        <Link to='https://drive.google.com/file/d/1CTY5mC00n2Sgk0ogKfoS0x2Ek_Lk53Tt/view?usp=sharing' target="_blank" download="A PRADEEP KUMAR - RESUME.pdf"><button>View CV</button></Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}