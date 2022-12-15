import React, { useContext } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { LightTheme } from '../data/Themes'
import {AngularSkill, AnimateSkill, BlenderSkill, CanvaSkill, CssSkill, Design, Develope, ElementorSkill, FigmaSkill, GitSkill, HtmlSkill, IllusSkill, IndesSkill, JsSkill, MoreSkill, MysqlSkill, NodeSkill, PhotoSkill, PhpSkill, QxpressSkill, ReactSkill, WpSkill } from '../data/AllSvgs';
import LogoComp from '../components/LogoComp';
import SocialIcons from '../components/SocialIcons';
import HomeButton from '../components/HomeButton';
import ParticlesComp from '../components/ParticlesComp';
import TitleComp from '../components/TitleComp';
// import DevSkillsComp from '../components/DevSkillsComp';
// import RoundComp from '../components/RoundComp';
import SoundBarComp from '../components/SoundBarComp';
import { MyContext } from '../context/MyContext';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
margin: 0 2rem;
width: 35vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;



font-family: 'Montserrat', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover {
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.5em + 1vw);
text-decoration: underline;


${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};
  }
}
&>*:first-child{
  margin-right: 1rem;
}
`
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 0.5vw);
padding: 0.5rem 0;

strong {
  margin-bottom: 1rem;
  text-transform: uppercase;
}

ul,p {
  margin-left: 2rem;
}

${Main}:hover &{
    color: ${props => props.theme.body};
}
`
const progress = keyframes`
0% {
      stroke-dasharray: 0 100;
    }
`

const SkillSet = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

`


const Skill = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 0.5vw);
padding: 0.5rem 0;
width: calc(1rem + 4vw);
margin: 0.5vh 0.7vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


svg{
  stroke: ${props => props.theme.text};
  ${Main}:hover &{
  stroke: ${props => props.theme.body};
  }
}

.circle-bg{
  stroke-width: 3.8;
  fill: none;
  stroke: ${props => props.theme.text};
  ${Main}:hover &{
  stroke: ${props => props.theme.body};
}
}

.circle{
  stroke-width: 2.8;
  fill: none;
  animation: ${progress} 1s ease-out forwards;
  stroke: ${props => props.theme.body};
  ${Main}:hover &{
  stroke: ${props => props.theme.text};
}
}

text {
    font-weight: 300;
    -webkit-text-stroke: 1px ${props => props.theme.text};
    color: ${props => props.theme.text};
    text-anchor: top right;
    font-size: calc(0.1em + 0.5vw);
    letter-spacing: 0.1rem;
     
    ${Main}:hover &{
      -webkit-text-stroke: 1px ${props => props.theme.body};
      
    }
  }
  
`


const MySkillsPage = () => {
  const {t} = useContext(MyContext);
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComp theme='light'/>
        <SocialIcons theme='light'/>
        <HomeButton/>
        <SoundBarComp/>
        <ParticlesComp theme='light'/>
        <Main>
          <Title>
            <Design width={40} height={40}/> {t('designer')}
          </Title>
          <Description>
          {t('designertext')}
          </Description>
          
          <Description>
            <strong>{t('tools')}</strong>
            <SkillSet>

            <Skill>
            <text x="18" y="20.35">AI 80%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="80, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <IllusSkill x="5.4" y="5.6" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Ps 65%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="65, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <PhotoSkill x="5.4" y="5.6" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Id 70%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="70, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <IndesSkill x="5.2" y="5.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">An 60%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="60, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <AnimateSkill x="5.2" y="5.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">QXpress 65%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="65, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <QxpressSkill x="5.2" y="5.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Blender 45%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="45, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <BlenderSkill x="5.2" y="5.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Figma 60%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="60, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <FigmaSkill x="5.2" y="5.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Elemen 70%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="70, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <ElementorSkill x="5.2" y="5.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Canva 70%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="70, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <CanvaSkill x="5.2" y="5.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">More 50%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="50, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <MoreSkill x="5.8" y="5.2" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            </SkillSet>
          </Description>
          <Description>
            <strong>{t('ilike')}</strong>
            <ul>
              <li>Web Design</li>
              <li>Movile Apps</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40}/>{t('developer')}
          </Title>
          <Description>
          {t('developertext')}
          </Description>
          <Description>
          <strong>Skills</strong>
          <SkillSet>

            <Skill>
            <text x="18" y="20.35">HTML 75%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="75, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <HtmlSkill x="4.8" y="6.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">CSS 85%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="85, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <CssSkill x="5" y="6.8" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">JS 65%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="65, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <JsSkill x="5.4" y="5.2" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">PHP 45%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="45, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <PhpSkill x="5.4" y="5.2" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">WP 85%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="85, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <WpSkill x="5.6" y="5.6" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Node 55%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="55, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <NodeSkill x="5.4" y="5.4" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">MySQL 33%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="33, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <MysqlSkill x="5.4" y="5.2" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Angular 60%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="60, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <AngularSkill x="5.4" y="5.6" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">React 75%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="75, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <ReactSkill x="5.4" y="5.4" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            <Skill>
            <text x="18" y="20.35">Git 60%</text>
            <svg viewBox="0 0 36 36">
            <path className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className="circle"
            stroke-dasharray="65, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <GitSkill x="5.4" y="5.4" width={25} height={25} fill='currentColor'/>
            </svg>
            </Skill>

            </SkillSet>
            
          </Description>
          <Description>
            <strong>{t('tools')}</strong>
              <p>VScode, Github, Codepen etc.</p>
              
          </Description>
        </Main>
        <TitleComp text="SKILLS" top="80%" left="30%" />
      </Box>  

    </ThemeProvider>
    
  )
}

export default MySkillsPage