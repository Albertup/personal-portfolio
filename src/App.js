
import React from 'react';
import { MyContext } from './context/MyContext';
import { useTranslation } from "react-i18next"
import GlobalStyle from './globalstyle';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './data/Themes';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import WorkPage from './pages/WorkPage'
import MySkillsPage from './pages/MySkillsPage'
import SoundBarComp from "./components/SoundBarComp"
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
  i18n.changeLanguage(code)
  }

  return <>
    <MyContext.Provider value={{t, changeLanguaje}}> 
      <GlobalStyle/>
      <ThemeProvider theme={LightTheme} >
      {/* <SoundBarComp/> */}
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainPage/>}/>
      <Route exact path="/about" element={<AboutPage/>}/>
      <Route exact path="/gallery" element={<GalleryPage/>}/>
      <Route exact path="/work" element={<WorkPage/>}/>
      <Route exact path="/skills" element={<MySkillsPage/>}/>
      </Routes>
      </AnimatePresence>
      </ThemeProvider>
    </MyContext.Provider> 
    </>
    
}

export default App
