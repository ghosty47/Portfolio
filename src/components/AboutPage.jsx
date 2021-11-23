import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
import astronaut from '../assets/Images/spaceman.png'


import LogoComponent from './subComponents/LogoComponent'
import SocialLinks from './subComponents/SocialLinks'
import PowerButton from './subComponents/PowerButton'
import ParticleComponent from './subComponents/ParticleComponent'

const Box = styled.div`
   background-color: ${({theme}) => theme.body};
   width: 100vw;
   height: 100vh;
   position: relative;
   overflow: hidden;
`

const float = keyframes`
    0% {
        transform: translateY(-10px)
    }
    50% {
        transform: translateY(15px) translateX(15px)
    }
    100% {
        transform: translateY(-10px)
    }
`

const Spaceman = styled.div`
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
    border: 2px solid ${({theme}) => theme.text};
    color: ${({theme}) => theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    jusstify-content: center
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    background-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme = 'dark'/>
                <SocialLinks theme = 'dark'/>
                <PowerButton />
                <ParticleComponent theme = 'dark'/>

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>

                <Main>
                    Usoroh is a FullStack Developer with years of hands-on experience designing, developing, and implementing eye-catching applications and providing solutions using a range of technologies and programming languages. <br></br> <br></br> He is seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a FullStack Developer. He loves to Game and play chess during his free hours<br></br> <br></br> He believes everything is an Art when you put your consciousness in it. You can connect with him via social links.
                </Main>
 
            </Box>
        </ThemeProvider>

    )
}

export default AboutPage
