import React, { useContext, useEffect, useRef } from 'react'
import styled, {  ThemeProvider } from 'styled-components'
import { DarkTheme } from '../data/Themes'
import LogoComp from '../components/LogoComp';
import SocialIcons from '../components/SocialIcons';
import HomeButton from '../components/HomeButton';
import { motion } from 'framer-motion';

import { Work } from '../data/WorkData'
import CardComp from '../components/CardComp';
import { Circle } from '../data/AllSvgs';
import TitleComp from '../components/TitleComp';
import { MyContext } from '../context/MyContext';

const Box = styled.div`
background-color: ${props => props.theme.body};
height: 400vh;
position: relative;
display: flex;
align-items: center;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;
color: ${props => props.theme.text};
`

const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;
`
// Framer-motion Configuration
const container = {
  hidden: {opacity:0},
  show: {opacity: 1,
  transition: {
    staggerChildren:0.5,
    duration: 0.5,
  }
  }
}
const WorkPage = () => {
  const {t} = useContext(MyContext);
  const ref = useRef(null)
  const circle = useRef(null)

  useEffect (() => {
    
    let element = ref.current;

        const rotate = () => {
          element.style.transform = `translateX(${-window.pageYOffset}px)`
          circle.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)'
        }

        window.addEventListener('scroll', rotate)
        return () => window.removeEventListener('scroll', rotate)

  },[])

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComp theme='dark'/>
        <SocialIcons theme='dark'/>
        <HomeButton/>
        <Main ref={ref} variants={container} initial='hidden' animate='show'>
        {Work.map( d =>
        <CardComp key={d.id} data={d}/>
        ) }
        </Main>
      </Box>  
        <Rotate ref={circle}>
          <Circle width={80} height={80} fill={DarkTheme.text}/>
        </Rotate>
        <TitleComp text={t('capwork')} top='10%' right='20%' />
    </ThemeProvider>
    
  )
}

export default WorkPage