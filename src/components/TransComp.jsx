import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { MyContext } from '../context/MyContext';
import { EnFlag, EsFlag } from '../data/AllSvgs';

const Translators = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
top: -0.5rem;
right: 2rem;

z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
cursor: pointer;
`
const LineTop = styled(motion.span)`
width: 2px;
height: 3.5rem;
background-color: #161514;

`

const TransComp = () => {
    const {changeLanguaje}=useContext(MyContext);
  return (
    <div>
        <Translators>
          <LineTop initial={{height:0}} animate={{height: '3rem'}} trasition={{type:'spring', duration: 1, delay: 0.8}}/>
          <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><EsFlag width={25} height={25} fill='currentColor' onClick={()=>changeLanguaje('es')}/></motion.div>
          <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><EnFlag width={25} height={25} fill='currentColor' onClick={()=>changeLanguaje('en')}/></motion.div>
          
        </Translators>
    </div>
  )
}

export default TransComp