import React, { useContext } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from '../data/Themes'
import LogoComp from '../components/LogoComp';
import SocialIcons from '../components/SocialIcons';
import HomeButton from '../components/HomeButton';
import ParticlesComp from '../components/ParticlesComp';

import element from '../assets/images/satellis.png'
import TitleComp from '../components/TitleComp';
import { MyContext } from '../context/MyContext';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const AboutImage = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img {
  width: 100%;
  height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.3rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Alexandria', monospace;
font-style: italic;
font-weight: 200;
`

const AboutPage = () => {
  const {t} = useContext(MyContext);
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComp theme='dark'/>
        <SocialIcons theme='dark'/>
        <HomeButton/>
        <ParticlesComp theme='dark'/>
        <AboutImage>
          <img src={element} alt="Element"/>
        </AboutImage>
        <Main>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dui metus, eu congue nisl sagittis in. Integer id tortor et eros consequat efficitur a in turpis. Donec sit amet ligula efficitur, placerat justo quis, porttitor nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur egestas tincidunt felis, placerat malesuada nisl fringilla eget. Suspendisse et malesuada arcu, at lacinia odio. Ut viverra lacus ac magna cursus sodales. Pellentesque mollis lorem eget nunc pharetra, eget accumsan risus viverra. Fusce vel sem risus. Curabitur pellentesque tellus non justo egestas laoreet. Sed ac sapien est. Proin eget arcu in sapien vulputate volutpat nec sed nunc.
        <br/><br/>
        Cras vel est et tortor finibus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque varius mauris mi, blandit dictum justo varius faucibus. Nullam eget dapibus dui, ut maximus orci. Sed ut est malesuada, gravida nulla a, mollis orci. Donec lacinia lorem id mi dictum ullamcorper. Curabitur blandit augue in sagittis porttitor. Maecenas aliquet porttitor nisi, ut fringilla tortor. Sed sodales nisi urna, quis cursus felis ullamcorper ut. Fusce eu ipsum sollicitudin, condimentum nulla pretium, egestas turpis.
        </Main>
        <TitleComp text={t('capabout')} top="10%" left="5%" />
      </Box>  

    </ThemeProvider>
    
  )
}

export default AboutPage