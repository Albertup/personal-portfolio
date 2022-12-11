//Home Button


import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { WhiteHomeBth } from '../data/AllSvgs'



const Home = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCFCFC;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items: center;
z-index: 3;

cursor: pointer;

&:hover {
    background-color: rgba(248,248,248,0.9);
    box-shadow: 0 0 8px 6px rgba(90,90,90,0.2);
}

&>*:first-child{
   text-decoration: none; 
   color: inherit;
}
`

const HomeButton = () => {
  return (
    <Home>
        <NavLink to="/">
        <WhiteHomeBth width={30} height={30} fill='currentColor'/>
        </NavLink>
    </Home>
  )
}

export default HomeButton