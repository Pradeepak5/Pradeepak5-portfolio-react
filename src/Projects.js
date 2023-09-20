import React from 'react';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';
import { Link } from 'react-router-dom';
import nationalize_api from './assets/nationalize_api.png';
import instaChat from './assets/instachat.png';
import calculator from './assets/calculator.png';

export default function Projects() {
  return (
    <div>
      <DrawerAppBar Content={<ProjectContent />} />
      <div className='App' id='App-project'>
        <BackGround />
      </div>
    </div>
  )
}

function ProjectContent(){
    return (
        <section className="teams" id="teams">
            <div className="max-width">
                <div className="carousel owl-carousel">
                    <div className="card">
                        <div className="box">
                        <img src={nationalize_api} alt='Nationalize Api' style={{objectFit:'cover'}}/>
                        <div className="text">Nationalize API</div>
                        <p>Visit Site : <Link to='https://zesty-daifuku-04f741.netlify.app/' target="_blank" style={{color:'whitesmoke',textDecoration:'none'}}>Nationalize check by name</Link></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <img src={instaChat} alt='InstaChat' style={{objectFit:'cover'}} />
                        <div className="text">InstaChat</div>
                        <p>Visit Site : <Link to='https://pradeepak5-instachat.netlify.app/' target="_blank" style={{color:'whitesmoke',textDecoration:'none'}}>Chat Application</Link></p>
                        <p>Credential : email - test@gmail.com, password - 12345</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <img src={calculator} alt='calculator' style={{objectFit:'cover'}} />
                        <div className="text">Calculator</div>
                        <p>Visit Site : <Link to='https://pradeepak5-gold-rate-calculator.netlify.app/' target="_blank" style={{color:'whitesmoke',textDecoration:'none'}}>Gold Rate Calculator</Link></p>
                        </div>
                    </div>
                    {/* <div className="card">
                        <div className="box">
                        <img src=".\file\vishnu.jpg" alt='' />
                        <div className="text">VISHNU</div>
                        <p>Vishnu is my teammate for Movie ticket booking application Project</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
