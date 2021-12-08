import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import styled from "styled-components"
import SocialLinks from "../components/SocialLinks"
import media from "styled-media-query"

const AboutWrapper = styled.nav`
  padding: 3.5rem 5rem 0;
  ${media.lessThan("small")`
  padding: 1.4rem 0.6rem 0 0;
`}
`
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1.5rem auto;
  color: var(--texts);
  ${media.lessThan("small")`
  font-size: 1.8rem;
`}
`
const Description = styled.p`
  margin-top: 3rem;  
  padding: 0 0 0 1.4rem;
  font-size: 1.4rem;
  color: var(--texts);
  line-height: 1.6;
`

const Link = styled.a`
color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`
const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <AboutWrapper>
      <Title>About Me</Title>
      <Description>
      My name is Matheus Lopes Garcia, i'm born and raised in Belo Horizonte/MG-Brazil. Today working as Frontend Developer at <Link href="https://www/avenuecode.com">@avenuecode</Link>        
      </Description>
      <Description>
      Started my carreer as a Support IT Analyst at Recivil, a company which makes system for registry, joined the college to work with programming, then went for my first internship at Pris. After some time joined the tech financial company U4Crypto. In 27 January 2021 (Pandemic Times) joined Avenue Code as i'm here since then.      
      </Description>
      <Description>
      Contact:       
      </Description>
      <SocialLinks />  
    </AboutWrapper>
  </Layout>
)

export default AboutPage
