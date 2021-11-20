/* eslint-disable camelcase */
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
      <ClickableCell onClick={() => handlePlayAudio(item.example_romanisation)}>
        {item.example_chinese} <ToSuper inputTxt={item.example_romanisation} />{' '}
        ({item.example_english})
      </ClickableCell>
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

const ClickableCell = styled.td`
  cursor: pointer;
`

const TableWrapper = styled.div`
  overflow-x: auto;
`
