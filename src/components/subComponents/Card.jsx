import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Github } from '../AllSvgs'

const Box = styled.li`
    width: 16rem;
    height: 20rem;
    background-color: ${({theme}) => theme.text};
    color: ${({theme}) => theme.body};
    padding 1.5rem 1rem;
    margin-right: 4rem;
    border-radius: 50px;
    // border: 2px solid yellow;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 5px solid ${({theme}) => theme.body};
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        border: 1px solid ${({theme}) => theme.text};
    }
`

const Title = styled.h2`
    font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-weight: 500;
`

const Tags = styled.div`
    border-top: 2px solid ${({theme}) => theme.body};
    padding-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;

    ${Box}: hover & {
        border-top: 2px solid ${({theme}) => theme.text};
    }
`

const Tag = styled.span`
    margin-right: 1rem;
    font-size: calc(0.8rem + 0.3vw);
    
`

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`

const Link = styled(NavLink)`
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 20px;
    font-size: calc(1em + 0.5vw);

    ${Box}: hover & {
        border: 2px solid ${({theme}) => theme.text};
        color: ${({theme}) => theme.text};
    }
`

const Git = styled(NavLink)`
    color: inherit;
    text-decoration: none;

    ${Box}: hover & {
        &>* {
            fill: ${({theme}) => theme.text};
        }
    }
`

const Card = (props) => {
    const { id, name, description, tags, demo, github } = props.data;
    return (
        <Box key={id}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link to={{pathname: `${demo}`}} target='_blank'>
                    Visit
                </Link>
                <Git to={{pathname: `${github}`}} target='_blank'>
                    <Github width={30} height={30}/>
                </Git>
            </Footer>
            
        </Box>
    )
}

export default Card
