import styled from 'styled-components'

export const MDwrapper = styled.article`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  font-size: 115%;

  h1 {
    margin-top: 3rem;
    font-size: 2.5rem;
    font-weight: 600;
  }

  h2,
  h3 {
    margin-top: 3rem;
    font-weight: 500;
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
    margin-bottom: 0.75rem;
  }

  strong {
    font-weight: 600;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    text-align: left;
    background-color: lightgray;
  }

  td,
  th {
    border: 1px solid gray;
    padding: 0.75rem 1rem;
  }
`
