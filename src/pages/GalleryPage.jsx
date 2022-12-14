import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import LogoComp from '../components/LogoComp'
import HomeButton from '../components/HomeButton'
import SocialIcons from '../components/SocialIcons'
import img from '../assets/images/backsky.png'

import {Blogs} from '../data/BlogData'
import GalleryComp from '../components/GalleyComp'
import ArrowComp from '../components/ArrowComp'
import TitleComp from '../components/TitleComp'
import { motion } from 'framer-motion'
import { MyContext } from '../context/MyContext'
// import SoundBarComp from '../components/SoundBarComp'





const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`
//Framer-motion config

const container = {
  hidden: {opacity:0},
  show: {opacity: 1,
  transition: {
    staggerChildren:0.5,
    duration: 0.5,
  }
  }
}

const GalleryPage = () => {

  const {t} = useContext(MyContext);

  const [numbers, setNumbers] = useState(0)

  useEffect (() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num));
  }, [])

  return (
    <MainContainer variants={container} initial='hidden' animate='show' exit={{opacity:0, transition:{duration: 0.5}}}>
      <Container >
          <LogoComp/>
          {/* <SoundBarComp/> */}
          <HomeButton/>
          <SocialIcons/>
          <ArrowComp numbers={numbers}/>
          <TitleComp text={t('capgall')} top="5rem" left="5rem" />
            <Center>
              <Grid>

                {
                  Blogs.map(blog => {
                    
                    return <GalleryComp key={blog.id} blog={blog}/>
                  })
                }
              
              </Grid>
            </Center>
      </Container>
    </MainContainer>
  )
}

export default GalleryPage