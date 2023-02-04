import React, { useContext } from 'react'
import styled from 'styled-components'

import { MyContext } from '../context/MyContext'
import { motion } from 'framer-motion'
import BackStreet from '../assets/images/backstreet.webp'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 65vh;
display: flex;

background: linear-gradient(
    to right, 
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
background-repeat: no-repeat;
background-size: 100% 2px;

border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
z-index: 1;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.c-profile-pic {
   position: absolute; 
   bottom:1px;
   left: 50%;
   transform: translate(-50%, 0%);
   width: 100%;
   height: 65vh;
   overflow: hidden;
}

`

const Text = styled.div`
font-size: calc(1em + 2vw);
font-weight: 900; 
color: ${props => props.theme.body};
padding: calc(0.5rem + 1vw);
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:nth-child(1) {
    font-size: calc(1em + 5vw); 
    margin-top: calc(0.6rem + 1.3vw);
    font-weight: 900;  
}

&>*:nth-child(2) {
    font-size: calc(0.6em + 1vw); 
    margin-top: calc(0.6rem + 1.3vw);
    font-weight: 600;  
}

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.6em + 0.2vw);
    margin-top: calc(0.6rem + 1.3vw);
    font-weight: 200;
}

`

const IntroComp = () => {
    const {t} = useContext(MyContext);
  return (
    <Box initial={{height:0}} animate={{height: '65vh'}} transition={{type: 'spring', duration:1, delay:1}}>
        <SubBox>
            <Text>
                <h1>{t('hi')}</h1>
                <h3>{t('imAlbert')}</h3>
                <h6>{t('idesign')}</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{ duration:1, delay:2}}>
                <img className='c-profile-pic' src={BackStreet} alt='Profile Pic'/>
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default IntroComp