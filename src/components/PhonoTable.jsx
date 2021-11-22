/* eslint-disable camelcase */
import { AiFillSound } from 'react-icons/ai'
import styled from 'styled-components'
import ToSuper from './ToSuper'
import { playAudio } from '../lib/utils'

export default function PhonoTable({ data, colTitles, audioPath }) {
  function handlePlayAudio(name) {
    playAudio(`/audio/${audioPath}/${name}.mp3`)
  }

  const tableBodyContent = data.map(item => (
    <tr key={item.entry}>
      <td>{item.entry}</td>
      <td>{item.IPA}</td>
      <ExampleCell onClick={() => handlePlayAudio(item.example_romanisation)}>
        <ExampleInnerDiv>
          <AiFillSound />
          <span>{item.example_chinese}</span>
          <ToSuper inputTxt={item.example_romanisation} />
          <span>({item.example_english})</span>
        </ExampleInnerDiv>
      </ExampleCell>
      <td>{item.comments}</td>
    </tr>
  ))

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {colTitles.map(title => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tableBodyContent}</tbody>
      </table>
    </TableWrapper>
  )
}

const ExampleInnerDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const ExampleCell = styled.td`
  cursor: pointer;

  &:active {
    background-color: #f0f0f0;
  }
`

const TableWrapper = styled.div`
  overflow-x: auto;
`
