import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
// import HomeButton from '../components/HomeButton'
import IntroComp from '../components/IntroComp'
import LogoComp from '../components/LogoComp'
import SocialIcons from '../components/SocialIcons'
import TransComp from '../components/TransComp'
import { MyContext } from '../context/MyContext'
import { Circle } from '../data/AllSvgs'
import { AnimatePresence, motion } from 'framer-motion'
import SoundBarComp from '../components/SoundBarComp'
import LoaderComp from '../components/LoaderComp'


const SpinnerContainer = styled.div`
display: flex;
position: fixed;
background: ${props => props.theme.text};
background-color: ${props => props.theme.text};
width: 100vw;
height: 100vh;
`


const Spinner = styled.div`
display: flex;
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
z-index:10;

&>*:nth-child(2){
    animation-delay: 0.1s;
}
&>*:nth-child(3){
    animation-delay: 0.2s;
}
&>*:nth-child(4){
    animation-delay: 0.3s;
}
&>*:nth-child(5){
    animation-delay: 0.4s;
}
&>*:nth-child(6){
    animation-delay: 0.5s;
}
&>*:nth-child(7){
    animation-delay: 0.6s;
}
&>*:nth-child(8){
    animation-delay: 0.7s;
}
&>*:nth-child(9){
    animation-delay: 0.8s;
}
&>*:nth-child(10){
    animation-delay: 0.9s;
}
`
const play = keyframes`
0%{transform:scaleY(0);}
50%{transform:scaleY(2);}
100%{transform:scaleY(0);}
`

const Wave = styled.span`
background: ${props => props.theme.body};
border: 1px solid ${props => props.theme.body};
animation: ${play} 1s ease infinite;
height: 3rem;
width: 0.20rem;
margin: 0 0.2rem;
border-radius: 0.1rem;
`

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

const bigger = keyframes`
0%{transform:scale(0);}
50%{transform:scale(2);}
100%{transform:scale(1);}
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
  animation: ${bigger} 2s linear;
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

  const [data, setData] = useState([]);
  console.log(data);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setloading(true);
          setTimeout(() => {
          setcompleted(true);
          }, 3000);
        });
    }, 2000);
  }, []);






  return (

    <>
    {!completed ? (
      <>
        {!loading ? (
          <SpinnerContainer>
                <Spinner>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                  <Wave></Wave>
                </Spinner>
          </SpinnerContainer>
        ) : (
          <>
          <AnimatePresence>
          <LoaderComp/>
          </AnimatePresence>
            
          </>
          
        )}
      </>
    ) : (
      <>
        <MainContainer>
            <DarkDiv click={click}/>
          <Container>
          <SoundBarComp/>
            {/* <HomeButton/>  */}
            <LogoComp theme={click ? 'dark' : 'light'} />
            <SocialIcons theme={click ? 'dark' : 'light'}/>
            <TransComp/>
            <Center click={click}>
              <Circle onClick={() => handleClick()} width={click ? '12vw' : '20vw'} height={click ? '12vh' : '20vh'} fill='currentColor'/>
              <span>{t('clickme')}</span>
            </Center>
            <Contact as="a" target="_blank" href="mailto:garcia.muñoz.albert@gmail.com">
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

      </>
    )}
  </>


    
  )
}

export default MainPage