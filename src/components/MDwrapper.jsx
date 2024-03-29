import { NextSeo } from 'next-seo'
import styled from 'styled-components'

export default function MDwrapper({ seoTitle, children }) {
  return (
    <>
      <NextSeo title={seoTitle} />
      <Wrapper>{children}</Wrapper>
    </>
  )
}

const Wrapper = styled.article`
  max-width: 45rem;
  padding: 0 1rem 2rem 1rem;
  margin: 0 auto;

  h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      margin-top: 2rem;
    }
  }

  h2,
  h3 {
    margin-top: 3rem;
    font-weight: 500;
  }

  h2::before {
    display: block;
    content: ' ';
    margin-top: -110px;
    height: 110px;
    visibility: hidden;
    pointer-events: none;
  }

  p {
    line-height: 1.75;
  }

  p,
  li {
    color: rgb(50, 50, 50);
  }

  li {
    line-height: 1.75;
  }

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: 600;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 2rem 0;
  }

  th {
    text-align: left;
    background-color: lightgray;
  }

  td,
  th {
    border: 1px solid lightgray;
    padding: 0.75rem;
  }

  #table-of-contents + ol {
    padding-left: 1rem;

    & > li {
      line-height: 1.2;
    }

    & > li > a {
      color: #ad3232;
    }
  }

  a {
    color: #ad3232;
  }
`
