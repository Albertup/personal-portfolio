import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../data/Themes'


const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Alexandria', cursive;
font-size: calc(1rem + 2vw);
position: fixed;
left: 2rem;
top: 1.5rem;
z-index: 3;
`

const LogoComp = (props) => {
  return (
    <Logo color={props.theme}>
        AG
    </Logo>
  )
}

export default LogoComp