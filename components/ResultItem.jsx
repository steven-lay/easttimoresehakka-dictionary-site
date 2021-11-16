import styled from 'styled-components'

export default function ResultItem({
  result: { chinese, romanisation, category, definition },
}) {
  return (
    <ItemWrapper>
      <TopRow>
        <div>
          <ChineseText>{chinese}</ChineseText>{' '}
          <RomanisationText>{romanisation}</RomanisationText>
        </div>
        <Category>{category}</Category>
      </TopRow>
      <DefinitionText>{definition}</DefinitionText>
    </ItemWrapper>
  )
}

const DefinitionText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #5f5f5f;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`

const ChineseText = styled.span`
  margin-right: 0.25rem;
  font-size: 1.5rem;
`

const RomanisationText = styled.span`
  color: #c43c3c;
  font-size: 0.9rem;
`

const ItemWrapper = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
`

const Category = styled.div`
  color: white;
  background-color: #050c75;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 8px;
`
