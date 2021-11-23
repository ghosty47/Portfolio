import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from './subComponents/LogoComponent'
import SocialLinks from './subComponents/SocialLinks'
import PowerButton from './subComponents/PowerButton'
import ParticleComponent from './subComponents/ParticleComponent'

const Box = styled.div`
   background-color: ${({theme}) => theme.body};
   width: 100vw;
   height: 100vh;
   position: relative;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`

const Main = styled.div`
   border: 2px solid ${({theme}) => theme.text};
   color: ${({theme}) => theme.text};
   background-color: ${({theme}) => theme.body};
   padding: 2rem;
   width: 34vw;
   height: 68vh;
   z-index: 3;
   line-height: 1.5;
   cursor: pointer;

   font-family: 'Ubuntu Mono', monospace;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   &:hover {
       color: ${({theme}) => theme.body};
       background-color: ${({theme}) => theme.text};
   }
   
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    ${Main}:hover &{
        &>* {
            fill: ${({theme}) => theme.body};
        }
    }

    &>*:first-child{
        margin-right: 1rem;
    }
`

const Desc = styled.div`
    color: ${({theme}) => theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
        {
            color: ${({theme}) => theme.body};
        }
    }

    strong {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    ul,p {
        margin-left: 2rem;

    }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme = 'light'/>
                <SocialLinks theme = 'light'/>
                <PowerButton />
                <ParticleComponent theme = 'light'/>
                <Main>
                    <Title>
                        <Design width={40} height={40}/> Designer
                    </Title>
                    <Desc>
                        I love creating top-notch and well-detailed designs, keeping it simple.
                    </Desc>
                    <Desc>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>
                                Web Design
                            </li>
                            <li>
                                Mobile Applications
                            </li>
                        </ul>
                    </Desc>
                    <Desc>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                Figma
                            </li>
                            <li>
                                Adobe Xd
                            </li>
                        </ul>
                    </Desc>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40}/> FullStack/Mobile Developer
                    </Title>
                    <Desc>
                        I enjoy bringing new ideas to life thus valuing the business or brand for which i'm creating!
                    </Desc>
                    <Desc>
                        <strong>Skills</strong>
                        <p>
                            Html, Css, Js, React, Redux, Sass, Bootstrap, Flutter, Dart, Tailwind, Firebase, Mongodb, Nodejs, Context API, RESTFul API's, styled-component, Git etc.
                        </p>
                    </Desc>
                    <Desc>
                    <strong>Tools</strong>
                    <p>
                        VScode, Andriod Studio, Github, Atom, Codepen etc.
                    </p>
                    </Desc>
                </Main>
            </Box>
        </ThemeProvider>

    )
}

export default MySkillsPage
