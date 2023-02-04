import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled(motion.a)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;

display: flex;
flex-direction: column;
z-index: 5;

&:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}

`

const Image =  styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 70%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;

${Box}:hover & {
    border:1px solid ${props => props.theme.body};
    
}

`

const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover & {
    border-bottom:1px solid ${props => props.theme.body};
    
}

`

const HashTags = styled.div`
padding: 0.5rem 0;
`

const Tag = styled.span`
padding-right: 0.5rem;
`

const Date = styled.span`
padding: 0.5rem 0;
`
const Container = styled(motion.div)``;

//Framer motion configuration
const Item = {
    hidden: {
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

//Modal

const MOverlay =  styled.div`
position: fixed;
z-index: 10;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
`
const MContent =  styled.div`
background-color: white;
padding: 20px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
width: 60%;
height: 70%;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
&:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}
${MClose}:hover & {
    border-bottom:1px solid ${props => props.theme.body};
    
}
`

const MClose =  styled.div`
position: fixed;
top: 30px;
right: 30px;
color: ${props => props.theme.text};
border: 0;
cursor: pointer;
font-size: 24px;
font-weight: bold;
&:hover {
    color: ${props => props.theme.body};
    transition: all 0.3s ease;
}
`


const BlogComp = (props) => {
    const {name, tags, date, imgSrc} = props.blog;
    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

    
  return (
    <Container variants={Item}>
        <Box  onClick={handleOpen}>
        <Image img={imgSrc}/>
        <Title>{name}</Title>
        <HashTags>{tags.map((i,id) =>{return <Tag key={id}>#{i}</Tag>})}</HashTags>
        <Date>{date}</Date>
        </Box>
        {isOpen && (
        <MOverlay onClick={handleClose}>
          <MContent>
            <MClose onClick={handleClose}>X</MClose>
            <Image img={imgSrc}/>
            <Title>{name}</Title>
            <HashTags>{tags.map((i,id) =>{return <Tag key={id}>#{i}</Tag>})}</HashTags>
            <Date>{date}</Date>
          </MContent>
        </MOverlay>
      )}
    </Container>
    
  )
}

export default BlogComp