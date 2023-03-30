import React, { useEffect, useRef } from 'react';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';
import Typed from 'typed.js'; 
import { Cursor } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <DrawerAppBar Content={<HomeContent />} />
      <div className='App'>
        <BackGround />
      </div>
    </div>
  );
}

function HomeContent(){

  const navigate = useNavigate();
  const el = useRef(null);
  useEffect(()=>{
    const typed = new Typed(el.current,{
      strings:["Developer","Designer","Blog Writer"],
      startDelay:300,
      backDelay:150,
      smartBackspace:true,
      showCursor:false,
      typeSpeed:150,
      backSpeed:150,
      loop:true
  })
  })
  return (
    <div className='HomeContent'>
      <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Hello, I am</div>
                    <div class="text-2">Pradeep Kumar A</div>
                    <div class="text-3">And I am a  <div><span ref={el}> </span><Cursor cursorStyle='<'/></div></div>
                    <button onClick={()=>navigate('/contact')}>Hire Me</button>
                </div>
            </div>
        </section>
    </div>
  )
}

