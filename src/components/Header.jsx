import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'

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
          <FlagImg src="/images/flag-round-250.png" alt="Flag" />
          <FlagText>East Timorese Hakka</FlagText>
        </ContentLeft>
        <ContentRight>
          <Link href="/">
            <StyledLink>Dictionary</StyledLink>
          </Link>
          <Link href="/pronunciation">
            <StyledLink>Pronunciation</StyledLink>
          </Link>
        </ContentRight>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: black;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 60rem;
  height: 5rem;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 60rem;
  color: white;
`

const Burger = styled(BiMenu)`
  width: 2em;
  height: 3em;
  margin-right: 0.5rem;

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
  @media (max-width: 768px) {
    display: none;
  }
`

const FlagImg = styled.img`
  width: 3rem;
`

const FlagText = styled.span`
  font-size: 1.2rem;
  width: 10rem;
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`
