
import React from 'react';
import { MyContext } from './context/MyContext';
import { useTranslation } from "react-i18next"
import GlobalStyle from './globalstyle';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './data/Themes';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import WorkPage from './pages/WorkPage'
import MySkillsPage from './pages/MySkillsPage'
import SoundBarComp from "./components/SoundBarComp"

function App() {
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
  i18n.changeLanguage(code)
  }

  return <>
    <MyContext.Provider value={{t, changeLanguaje}}> 

      <GlobalStyle/>
      <ThemeProvider theme={LightTheme} >
      <SoundBarComp/>
      <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route exact path="/about" element={<AboutPage/>}/>
      <Route exact path="/gallery" element={<GalleryPage/>}/>
      <Route exact path="/work" element={<WorkPage/>}/>
      <Route exact path="/skills" element={<MySkillsPage/>}/>
      </Routes>
      </ThemeProvider>
    
  
    </MyContext.Provider> 
    </>
    
}

export default App
