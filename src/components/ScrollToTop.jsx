import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false)
  const [mounted, setMounted] = useState(false)

  const ref = useRef()

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    function checkVisibility() {
      if (window.pageYOffset > 100) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    setMounted(true)

    ref.current = document.querySelector('#portal')
    window.addEventListener('scroll', checkVisibility)

    return () => window.removeEventListener('scroll', checkVisibility)
  }, [])

  return mounted
    ? createPortal(
        showScroll && (
          <StyledScrollToTop>
            <StyledIcon onClick={handleScrollToTop} />
          </StyledScrollToTop>
        ),
        ref.current
      )
    : null
}

const StyledScrollToTop = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`

const StyledIcon = styled(BsFillArrowUpCircleFill)`
  height: 3em;
  width: 3em;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`
