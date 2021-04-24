import React, {useState} from 'react'

// containers
import BackGroundContainer from './containers/background'
import HeaderContainer from './containers/header'
import MainContainer from './containers/main'
import SkillsContainer from './containers/skills'
import BarContainer from './containers/bar'
import PortfolioContainer from './containers/portfolio';
import TitleContainer from './containers/title';
import AboutContainer from './containers/about';
import ResumeContainer from './containers/resume';
import ContactContainer from './containers/contact';
import FooterContainer from './containers/footer';

export default function App() {

  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(null)

  return (
    <>
      <BackGroundContainer isMobileNavOpen={isMobileNavOpen} id="home">
        <HeaderContainer isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen}/>
        
      </BackGroundContainer>
      <MainContainer>
        <SkillsContainer/>
        <BarContainer/>
        
        <TitleContainer title='Portfolio' id="portfolio"/>

        <PortfolioContainer />

        <BarContainer/>

        <TitleContainer title='About' id="about"/>

        <AboutContainer />

        <ResumeContainer/>

        <BarContainer/>

        <TitleContainer title='Contact' justifyContent="center" id="contact"/>

        <ContactContainer/>

      </MainContainer>

      <FooterContainer/>
    </>
  );
}

