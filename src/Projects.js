import React from 'react';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';
import { Link } from 'react-router-dom';
import nationalize_api from './assets/nationalize_api.png';

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
                        <p>Visit Site : <Link to='https://zesty-daifuku-04f741.netlify.app/' style={{color:'whitesmoke',textDecoration:'none'}}>nationalize api</Link></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                        <img src=".\file\kabilash.jpg" alt='' />
                        <div className="text">Youtube Clone</div>
                        <p>Visit Site : upcoming....</p>
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
