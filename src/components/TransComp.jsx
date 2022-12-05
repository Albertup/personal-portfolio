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
top: 0rem;
right: 2rem;

z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
cursor: pointer;
`
const LineTop = styled(motion.span)`
width: 2px;
height: 3rem;
background-color: #161514;

`

const TransComp = () => {
    const {changeLanguaje}=useContext(MyContext);
  return (
    <div>
        <Translators>
          <LineTop initial={{height:0}} animate={{height: '3rem'}} trasition={{type:'spring', duration: 1, delay: 0.8}}/>
          <motion.div initial={{transform:"scale(0)"}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.2}}><EsFlag width={25} height={25} fill='currentColor' onClick={()=>changeLanguaje('es')}/></motion.div>
          <motion.div initial={{transform:"scale(0)"}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.6}}><EnFlag width={25} height={25} fill='currentColor' onClick={()=>changeLanguaje('en')}/></motion.div>
          
        </Translators>
    </div>
  )
}

export default TransComp