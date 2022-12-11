import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

touch-action: none;
overflow: hidden;

width: 100vw;
height: 100vh;

z-index: 6;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
`
const Container = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

touch-action: none;
overflow: hidden;

width: 100vw;
height: 100vh;

z-index: 6;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.text};
color: ${props => props.theme.body};

svg{
    width: 15rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-lincap: round;
    g{
        path{
            stroke: ${props => props.theme.body};
        }
    }
}
`
const Text = styled(motion.span)`
font-family: 'Alexandria', cursive;
font-size: ${props => props.theme.fontxl};
font-weight: 100;
letter-spacing: 0.4rem;
-webkit-text-stroke: 1px ${props => props.theme.body};
color: transparent;
padding-top: 0.1rem;
`

const textVariants = {
    hidden : {opacity:0}, 

    visible : {opacity:1, transition : {duration: 1, yoyo: Infinity, ease: 'easeInOut'}}, // yoyo: infinity, repeats infinite times
    
}
const pathVariants = {
    hidden : {opacity:0, pathLength: 0}, 
    visible : {opacity:1, pathLength: 1, transition : {duration: 2, ease: 'easeInOut'}}, 
    
}

const LoaderComp = () => {
  return (
    <MainContainer>
    <Container initial={{y: 0, opacity: 1}} animate={{y:'100%', opacity: 0}} transition={{duration:1, delay:2}}>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    height="48px"
    width="48px"
    fill="none"
    >
    <g>
    <motion.path
    variants={pathVariants} initial="hidden" animate="visible"
    d="M11.02 11.94 1.55 33.997h5.915l1.546-3.965h9.524l1.516 3.965h6.136L16.935 11.94Zm-.316 13.75 3.117-7.992 3.055 7.993ZM41.227 28.479a11.653 11.653 0 0 1-1.086.5 7.753 7.753 0 0 1-2.722.582 6.169 6.169 0 0 1-2.502-.503 6.081 6.081 0 0 1-1.998-1.4 6.474 6.474 0 0 1-1.321-2.093 7.05 7.05 0 0 1-.471-2.612 7.16 7.16 0 0 1 .456-2.58 6.076 6.076 0 0 1 1.306-2.077 6.262 6.262 0 0 1 1.982-1.385 6.052 6.052 0 0 1 2.486-.503 8.042 8.042 0 0 1 3.099.645 8.288 8.288 0 0 1 2.722 1.81l3.273-3.966a10.905 10.905 0 0 0-2.628-1.762 16.041 16.041 0 0 0-3.147-1.133 13.698 13.698 0 0 0-3.288-.409 13.397 13.397 0 0 0-4.83.85 11.833 11.833 0 0 0-3.872 2.391 10.876 10.876 0 0 0-2.563 3.619 11.047 11.047 0 0 0-.912 4.5 11.603 11.603 0 0 0 .881 4.532 10.758 10.758 0 0 0 2.484 3.65 11.63 11.63 0 0 0 3.762 2.407 12.436 12.436 0 0 0 4.674.865 14.772 14.772 0 0 0 3.224-.377 18.95 18.95 0 0 0 3.242-1.038 14.684 14.684 0 0 0 2.722-1.48v-8.748h-4.973Z"/>
    </g></svg>
    <Text variants={textVariants} initial="hidden" animate="visible">Portfolio</Text> 
    </Container>
    </MainContainer>
  )
}

export default LoaderComp