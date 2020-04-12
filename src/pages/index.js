import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLink } from '../elements'
import { above, avenir } from '../utils'
import Layout from '../components/layout'
import SEO from '../components/seo'


const HeaderWrapper = styled.header`
	text-align: center;
	margin: 6rem auto 2rem auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${above.mobileL`
		padding-top: 4rem;
    padding-bottom: 4rem;
	`}
  ${above.mobileS`
		margin-top: 3rem;
	`}
`

const Header = styled.h1`
	${avenir};
	font-weight: 900;
	font-size: 1.25rem;
	${above.mobileL`
		font-size: 1.5rem;
	`}
`

const SubHeader = styled.h2`
	${avenir};
	font-size: .875rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: .1em;
	margin-top: -.5rem;
  margin-bottom: 1rem;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HeaderWrapper>
      <Header>Ørn Forlag</Header>
      <SubHeader>Lite bokforlag som utgir bøker om Norsk natur og kultur</SubHeader>
      <SocialLink href="https://www.facebook.com/ornforlag" aria-label="facebook">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/ornforlag" aria-label="instagram">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </SocialLink>
      <SocialLink href="mailto:bjorn@ornforlag.no" aria-label="mail">
        <FontAwesomeIcon icon="envelope" />
      </SocialLink>
    </HeaderWrapper>
  </Layout>
)

export default IndexPage
