import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
// import HomeButton from '../components/HomeButton'
import IntroComp from '../components/IntroComp'
import LogoComp from '../components/LogoComp'
import SocialIcons from '../components/SocialIcons'
import TransComp from '../components/TransComp'
import { MyContext } from '../context/MyContext'
import { Circle } from '../data/AllSvgs'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6 {
    font-family: 'Alexandria', sans-serif;
    font-weight: 300;
}
`

const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(4rem + 2vw);
text-decoration: none;
z-index: 1;
`
const Gallery = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: 1.2rem;
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const Work = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: 3rem;
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 2rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const About = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`

const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child {
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child {
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
background-color: #000;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0'};
height: ${props => props.click ? '100%' : '0'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const MainPage = () => {
  const {t} = useContext(MyContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
          <DarkDiv click={click}/>
        <Container>
          {/* <HomeButton/>  */}
          <LogoComp theme={click ? 'dark' : 'light'}/>
          <SocialIcons theme={click ? 'dark' : 'light'}/>
          <TransComp/>
          <Center click={click}>
            <Circle onClick={() => handleClick()} width={click ? '12vw' : '20vw'} height={click ? '12vh' : '20vh'} fill='currentColor'/>
            <span>{t('clickme')}</span>
          </Center>
          <Contact target="_blank" to={{pathname:"mailto:garcia.muñoz.albert@gmail.com"}}>
              <motion.h2 initial={{y:-200, transition: {type: 'spring', duration: 1.5, delay:1}}} animate={{y: 0, transition: {type: 'spring', duration: 1.5, delay:1}}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{t('saluda')}</motion.h2>
          </Contact>
          <Gallery to="/gallery">
              <motion.h2 initial={{y:-200, transition: {type: 'spring', duration: 1.5, delay:1}}} animate={{y: 0, transition: {type: 'spring', duration: 1.5, delay:1}}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{t('gallery')}</motion.h2>
          </Gallery>
          <Work to="/work" click={click}>
              <motion.h2 initial={{y:-200, transition: {type: 'spring', duration: 1.5, delay:1}}} animate={{y: 0, transition: {type: 'spring', duration: 1.5, delay:1}}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{t('work')}</motion.h2>
          </Work>
          <BottomBar>
            <About to="/about" click={click}>
                <motion.h2 initial={{y:200, transition: {type: 'spring', duration: 1.5, delay:1}}} animate={{y: 0, transition: {type: 'spring', duration: 1.5, delay:1}}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{t('about')}</motion.h2>
            </About>
            <Skills to="/skills">
                <motion.h2 initial={{y:200, transition: {type: 'spring', duration: 1.5, delay:1}}} animate={{y: 0, transition: {type: 'spring', duration: 1.5, delay:1}}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{t('skills')}</motion.h2>
            </Skills>
          </BottomBar>
        </Container>
        {click ? <IntroComp click={click}/> : null}
    </MainContainer>
  )
}

export default MainPage