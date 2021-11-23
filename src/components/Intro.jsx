import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'
import { motion } from 'framer-motion'


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 55vh;
display: flex;


background: linear-gradient(
    to right,
    ${({theme}) => theme.body} 50%,
    ${({theme}) => theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${({theme}) => theme.body} 50%,
    ${({theme}) => theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;

    border-left: 2px solid ${({theme}) => theme.body};
    border-right: 2px solid ${({theme}) => theme.text};

    z-index: 1;

`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pix {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: auto;
    }

`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${({theme}) => theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child {
        color ${({theme}) => `rgba(${theme.bodyRgba},0.7)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }
`



const Intro = () => {
    return (
        <Box
            initial={{width: 0}}
            animate={{width:"65vw"}}
            transition={{type: 'spring', duration:2, delay: 1}}
        >
            <SubBox>
                <Text>
                    <h1>Hello</h1>
                    <h3>I'm Sam.</h3>
                    <h6>I design and build websites and mobile apps. </h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 2}}
                >
                    <img className='pix' src={Me} alt="Profile" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
