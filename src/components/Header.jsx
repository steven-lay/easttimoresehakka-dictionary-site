import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import DocsDropdown from './DocsDropdown'

export default function Header() {
  const [showSidenav, setShowSidenav] = useState(false)

  function toggleSidenav() {
    setShowSidenav(!showSidenav)
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ContentLeft>
          <Burger onClick={toggleSidenav} />
          <FlagLink href="/">
            <FlagImg src="/images/flag-round-250.png" alt="Flag" />
          </FlagLink>
          <FlagText>East Timorese Hakka</FlagText>
        </ContentLeft>
        <ContentRight>
          <Link href="/dictionary">
            <StyledLink>Dictionary</StyledLink>
          </Link>
          <DocsDropdown />
          <Link href="/resources">
            <StyledLink>Resources</StyledLink>
          </Link>
        </ContentRight>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: black;
  box-shadow: 0 0 6px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 3.75rem;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 45rem;
  color: white;

  @media (min-width: 768px) {
    height: 4rem;
  }
`

const Burger = styled(BiMenu)`
  width: 2em;
  height: 3em;
  margin-right: 0.375rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ContentRight = styled(ContentLeft)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

const FlagLink = styled(Link)``

const FlagImg = styled.img`
  display: none;
  width: 3rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: inline;
  }
`

const FlagText = styled.span`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    width: 10rem;
  }
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`
