import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Codepen, Github, LinkedIn, Twitter } from '../data/AllSvgs'
import { DarkTheme } from '../data/Themes'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
`
const Line = styled(motion.span)`
width: 2px;
height: 6rem;
background-color: ${props => props.theme.text};
background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`

const linkedIn = "https://www.linkedin.com/in/albertup";

const SocialIcons = (props) => {
  return (
    <Icons>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <NavLink  onClick={() => window.location.href = 'http://github.com/albertup'} target="_blank" rel='noreferrer' style={{color:'inherit'}}>
                <Github  width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <NavLink onClick={() => window.location.href = 'http://twitter.com/Albertupgrade'} target="_blank" rel='noreferrer' style={{color:'inherit'}}>
                <Twitter  width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <NavLink onClick={() => window.location.href = 'https://www.linkedin.com/in/albertup'} target="_blank" rel='noreferrer' style={{color:'inherit'}}>
                <LinkedIn width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <NavLink onClick={() => window.location.href = 'http://codepen.io/albertup'} target="_blank" rel='noreferrer' style={{color:'inherit'}} >
                <Codepen width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <Line initial={{height:0}} animate={{height: '6rem'}} trasition={{type:'spring', duration: 1, delay: 0.8}} color={props.theme}/>
    </Icons>
  )
}

export default SocialIcons