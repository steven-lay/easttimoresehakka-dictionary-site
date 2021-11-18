import styled from 'styled-components'
import Link from 'next/link'

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ContentArea>
          <FlagImg src="/images/flag-round-250.png" alt="Flag" />
          <FlagText>East Timorese Hakka</FlagText>
        </ContentArea>
        <ContentArea>
          <Link href="/">
            <StyledLink>Dictionary</StyledLink>
          </Link>
          <Link href="/pronunciation">
            <StyledLink>Pronunciation</StyledLink>
          </Link>
        </ContentArea>
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
  max-width: 60rem;
  color: white;
`

const ContentArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
