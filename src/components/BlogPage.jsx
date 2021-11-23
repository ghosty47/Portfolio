import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../components/subComponents/LogoComponent'
import PowerButton from './subComponents/PowerButton'
import SocialLinks from './subComponents/SocialLinks'
import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent'
// import Anchor from './subComponents/Anchor'
import AnchorComponent from './subComponents/Anchor'
import { useEffect } from 'react'

const MainContainer = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    bacground-position: center;
    width: 100vw;
`

const Container = styled.div`
    background-color: ${({theme}) => `rgba(${theme.bodyRgba},0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 5rem;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw)
`

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    return (
        <div>
            <MainContainer>
                <Container>
                    <LogoComponent/>
                    <PowerButton/>
                    <SocialLinks/>
                    <AnchorComponent numbers={numbers}/>

                    <Center>
                        <Grid>
                            {
                                Blogs.map(blog => {
                                   return <BlogComponent key={blog.id} blog={blog} />
                                })
                            }
                        </Grid>
                    </Center>
                </Container>
            </MainContainer>
        </div>
    )
}

export default BlogPage
