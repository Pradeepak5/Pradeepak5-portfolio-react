import React, {useEffect} from 'react';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';
import TagCloud from 'TagCloud';

export function Skills() {
  return (
    <div>
      <DrawerAppBar Content={<SkillContent />} />
      <div className='App' id='skill-app'>
        <BackGround />
      </div>
    </div>
  );
}

function SkillContent(){
  useEffect(()=>{
    return () => {
    const container = ".tagcloud";
    const texts = ["HTML","CSS","Bootstarp","ReactJS","Java","Python","JavaScript","NodeJs","SQL","Flask","Jquery","Git","Github"];
    const options = {
      radius:300,
      maxSpeed:"normal",
      initSpeed:"normal",
      keep:true,
    };

    TagCloud(container,texts,options);
  };
  },[]);
  return (
    <div className='skills'>
      <div className='skills-body'  style={{width:"50%"}}>
      <div className='skill-container'>
        <div className='box'>
            <div className='shadow'>
            </div> 
            <div className='content'>
              <div className='percent' data-text="codesolving" style={{"--num":'70'}}>
                <div className='dot'></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
              </div>
              <div className='number'>
                <h2>70<span>%</span></h2>
              </div>
            </div> 
        </div>  
        {/* --------------------------         */}
        <div className='box'>
            <div className='shadow'>

            </div> 
            <div className='content'>
              <div className='percent' data-text="frontend" style={{"--num":'90'}}>
                <div className='dot'></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
              </div>
              <div className='number'>
                <h2>90<span>%</span></h2>
              </div>
            </div> 
        </div>
        {/* ------------------------------ */}
        {/* --------------------------         */}
        <div className='box'>
            <div className='shadow'>

            </div> 
            <div className='content'>
              <div className='percent' data-text="backend" style={{"--num":'85'}}>
                <div className='dot'></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
              </div>
              <div className='number'>
                <h2>85<span>%</span></h2>
              </div>
            </div> 
        </div>
        {/* ------------------------------ */}
        <div className='box'>
            <div className='shadow'>
            </div> 
            <div className='content'>
              <div className='percent' data-text="database" style={{"--num":'80'}}>
                <div className='dot'></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
              </div>
              <div className='number'>
                <h2>80<span>%</span></h2>
              </div>
            </div> 
        </div>
      </div>
      </div>
       {/* ------------------ */}
       <div className='skills-content'>
      <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>Html, Css, JavaScript</span>
                                <span>90%</span>
                                
                            </div>
                            <div className="line fe"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Java</span>
                                <span>70%</span>
                                
                            </div>
                            <div className="line java"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>ReactJs, Redux</span>
                                <span>90%</span>
                                
                            </div>
                            <div className="line react"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>MaterialUI, BootStrap</span>
                                <span>90%</span>
                                
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>SQL - MySql, NoSQL - Mongodb</span>
                                <span>80%</span>
                                
                            </div>
                            <div className="line db"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>NodeJs</span>
                                <span>80%</span>
                                
                            </div>
                            <div className="line node"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Debugging & error handling</span>
                                <span>95%</span>
                                
                            </div>
                            <div className="line deploy"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Git, GitHub</span>
                                <span>85%</span>
                                
                            </div>
                            <div className="line git"></div>
                        </div>
                    </div>
      </div>

    </div>
  )
}
