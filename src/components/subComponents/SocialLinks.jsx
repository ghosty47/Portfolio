import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../AllSvgs'
import { darkTheme } from '../../components/Themes';

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.5rem 0;
    }

`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${({color}) => color === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialLinks = ({theme}) => {
    return (
        <Icons>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/ghosty47"}}>
                    <Github width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/ghosty47"}}>
                    <Twitter width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://facebook.com/mfon_usoroh"}}>
                    <Facebook width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/ghosty47"}}>
                    <YouTube width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </div>

            <Line color = {(theme)}/>
        </Icons>
    )
}

export default SocialLinks
