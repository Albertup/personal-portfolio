import React from 'react'
import Particles from 'react-tsparticles'
// import { loadSlim } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import styled from 'styled-components'

//particle config file
import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';



const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`

const ParticlesComp = (props) => {

  const ParticlesInit = async (main) => {
    console.log(main);
    await loadFull(main)
  }

  return (
    <Box><Particles init={ParticlesInit} style={{position:'absolute', top:0}} params={props.theme === 'light' ? configLight : configDark}/></Box>
  )
}

export default ParticlesComp