import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../data/AllSvgs';


const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text}; 
}
`

const Title = styled.h2`
font-size: calc(0.6em + 0.5vw);
`

const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body}; 
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
${Box}:hover &{
    border-top: 2px solid ${props => props.theme.text};   
}
`

const Tag = styled.span`
margin-right: 1rem; 
font-size: calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size: calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props => props.theme.text}; 
    color: ${props => props.theme.body};  
}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;

${Box}:hover &{
    &>*{
       fill: ${props => props.theme.text};
    } 
}
`
const Image =  styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 50%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
border-radius: 0 50px 0 0;

${Box}:hover & {
    border:1px solid ${props => props.theme.body};
}
`

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

const CardComp = (props) => {
    const {id, name, image, tags, demo, github} = props.data;
  return (
    <Box key={id} variants={Item}>
        
        <Image img={image}/>
        <Title>{name}</Title>
        <Tags>{tags.map((i,id) =>{return <Tag key={id}>#{i}</Tag>})}</Tags>
        <Footer>
            <Link as="a" href={`${demo}`} target="_blank" passHref={true}>
                WEB
            </Link>
            <Git as="a" href={`${github}`} target="_blank" passHref={true}>
                <Github width={40} height={40}/>
            </Git>
        </Footer>
    </Box>
  )
}

export default CardComp