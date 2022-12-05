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
const SocialIcons = (props) => {
  return (
    <Icons>
        <motion.div initial={{transform:"scale(0)"}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1}}>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"http://github.com/albertup"}}>
                <Github  width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div initial={{transform:"scale(0)"}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.2}}>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"http://twitter.com/Albertupgrade"}}>
                <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div initial={{transform:"scale(0)"}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.4}}>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/albertup"}}>
                <LinkedIn width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <motion.div initial={{transform:"scale(0)"}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.6}}>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"http://codepen.io/albertup"}}>
                <Codepen width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
        </motion.div>
        <Line initial={{height:0}} animate={{height: '6rem'}} trasition={{type:'spring', duration: 1, delay: 0.8}} color={props.theme}/>
    </Icons>
  )
}

export default SocialIcons