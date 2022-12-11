import React, { useContext } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from '../data/Themes'
import LogoComp from '../components/LogoComp';
import SocialIcons from '../components/SocialIcons';
import HomeButton from '../components/HomeButton';
import ParticlesComp from '../components/ParticlesComp';

import button from '../assets/svg/button.svg'
import me from '../assets/images/me.png'
import element from '../assets/images/satellis.png'
import TitleComp from '../components/TitleComp';
import { MyContext } from '../context/MyContext';
import SoundBarComp from '../components/SoundBarComp';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`


const AboutImage = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img {
  width: 100%;
  height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 40vh;
z-index: 3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: FLEX-START;
font-size: calc(0.4rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 20rem;

font-family: 'Alexandria', monospace;
font-style: italic;
font-weight: 200;
`


const floatme = keyframes`
0% { transform: translateY(-5px) }
70% { transform: translateY(5px) translateX(5px) }
100% { transform: translateY(-5px) }
`

const Image = styled.div`
width: 50vw;
height: 40vh;
z-index: 3;
color: ${props => props.theme.text};
text-decoration: none;
font-size: calc(0.4rem + 1vw);
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
img{
  width: calc(5rem + 10vw);
  height: auto;
  margin-top: -25vh;
  margin-left: -25vh;
  animation: ${floatme} 4s ease infinite;
}
`

const Button = styled.div`
width: 50vw;
height: 40vh;
z-index: 3;
color: ${props => props.theme.text};
text-decoration: none;
font-size: calc(0.4rem + 1vw);
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;


a{
  font-family: 'Alexandria', monospace;
  font-style: italic;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.body};
  text-decoration: none;
  span{
    
    text-decoration: none;
    position: absolute;
    right: 7.8rem;
  }
  img {
  width: calc(10rem + 5vw);
  height: auto;
  top: 0;
  }

  &:hover {
    color: #666666;
  }
}

`


const AboutPage = () => {
  const {t} = useContext(MyContext);
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComp theme='dark'/>
        <SocialIcons theme='dark'/>
        <HomeButton/>
        <SoundBarComp/>
        <ParticlesComp theme='dark'/>
        <AboutImage>
          <img src={element} alt="Element"/>
        </AboutImage>
        <Main>
        <Image><img src={me} alt="Element"/></Image>
        <strong>{t('aboutme')}</strong>
        <br/>
        {t('textabout')}
        <Button ><a href="https://drive.google.com/file/d/1ucGSLitvlQG6wvUULNQcPBTyL9wnOmPH/view?usp=sharing" target="_blank" rel="noreferrer"><img src={button} alt="button"/><span>{t('resume')}</span></a></Button>
        </Main>
        <TitleComp text={t('capabout')} top="10%" left="5%" />
      </Box>  

    </ThemeProvider>
    
  )
}

export default AboutPage