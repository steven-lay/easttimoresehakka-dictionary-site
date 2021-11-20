import { DebounceInput } from 'react-debounce-input'
import styled from 'styled-components'

export default function SearchSection({ onSearch }) {
  return (
    <SectionContainer>
      <InnerContainer>
        <SearchTitle>Dictionary</SearchTitle>
        <InputFlexContainer>
          <SearchInput
            type="text"
            placeholder="Search for a term..."
            minLength={2}
            debounceTimeout={300}
            onChange={e => onSearch(e.target.value)}
          />
        </InputFlexContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  background-color: rgb(252, 252, 252);
  height: 10rem;
`

const InnerContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 30rem;
`

const InputFlexContainer = styled.div`
  display: flex;
`

const SearchInput = styled(DebounceInput)`
  padding: 0.675rem;
  flex: 1 1 auto;
  outline: none;
  border: 1px solid gray;
  border-radius: 0.25rem;
  border: 2px rgb(160, 160, 160) solid;
  transition: border 0.2s;
  font-size: 115%;

  &:focus {
    border: 2px black solid;
  }
`

const SearchTitle = styled.h1`
  margin: 0;
  padding: 1.5rem 0;
  font-weight: 400;
`
