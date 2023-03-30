import * as React from 'react';
import { BackGround } from './BackGround';
import { DrawerAppBar } from './DrawerAppBar';

export function About() {
  return (
    <div>
      <DrawerAppBar Content={<AboutContent />}/>
      <div className='App'>
        <BackGround />
      </div>
    </div>
  );
}

function AboutContent(){
  return (
    <div>
      About - under development
    </div>
  )
}