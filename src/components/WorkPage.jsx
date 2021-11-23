import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'


import LogoComponent from './subComponents/LogoComponent'
import SocialLinks from './subComponents/SocialLinks'
import PowerButton from './subComponents/PowerButton'

import { Work } from '../data/WorkData'
import Card from './subComponents/Card'


const Box = styled.div`
   background-color: ${({theme}) => theme.body};
//    width: 100vw;
   height: 100vh;
   position: relative;
   overflow: auto;
    // border: 2px solid red;
`

const Main = styled.ul`
    position: fixed;
    top: 9rem;
    // left: calc(10rem + 15vw);
    width: 80vw;
    height: auto;
    display: flex;
    // margin: 0 auto;
    margin-bottom: 3rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 2px solid green;

    color: white;
`





const WorkPage = () => {
    // const ref = useRef(null);

    // useEffect(() => {
    //     let element = ref.current;

    //     const rotate = () => {
    //         element.style.transform = `translateX(${-window.pageYOffset}px)`
    //     }

    //     window.addEventListener('scroll', rotate)

    //     return () => window.removeEventListener('scroll', rotate)

    // }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme = 'dark'/>
                <SocialLinks theme = 'dark'/>
                <PowerButton />

                <Main>
                    {
                        Work.map(d => <Card key={d.id} data={d}/>)
                    }
                </Main>
 
            </Box>
        </ThemeProvider>

    )
}

export default WorkPage
