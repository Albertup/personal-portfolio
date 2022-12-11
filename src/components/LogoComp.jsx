
import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { DarkTheme } from '../data/Themes'

const intro = keyframes`
0%{transform:scale(0);}
90%{transform:scale(0);}
100%{transform:scale(1);}
`

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
animation: ${intro} 2s linear;
font-family: 'Alexandria', cursive;
font-size: calc(1rem + 2vw);
position: fixed;
cursor: pointer;
left: 2rem;
top: 1.5rem;
z-index: 3;
`

const LogoComp = (props) => {
  return (
    <Link to="/">
      <Logo color={props.theme}>
        AG
      </Logo>
    </Link>
    
  )
}

export default LogoComp