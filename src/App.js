import React, {useState} from 'react'

// containers
import BackGroundContainer from './containers/background'

import HeaderContainer from './containers/header'
import MainContainer from './containers/main'
import SkillsContainer from './containers/skills'
import BarContainer from './containers/bar'

export default function App() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(null)

  return (
    <>
      <BackGroundContainer isMobileNavOpen={isMobileNavOpen}>
        <HeaderContainer isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen}/>
      </BackGroundContainer>
      <MainContainer>
          
        <SkillsContainer/>
        <BarContainer/>

      </MainContainer>
    </>
  );
}

