import React, {useState} from 'react'

// containers
import BackGroundContainer from './containers/background'
import HeaderContainer from './containers/header'
import MainContainer from './containers/main'

export default function App() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(null)

  return (
    <>
      <BackGroundContainer isMobileNavOpen={isMobileNavOpen}>
        <HeaderContainer isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen}/>
      </BackGroundContainer>
      <MainContainer>
          <h1>test</h1>
        </MainContainer>
    </>
  );
}

