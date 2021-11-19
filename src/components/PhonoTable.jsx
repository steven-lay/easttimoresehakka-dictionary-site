/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import styled from 'styled-components'
import ToSuper from './ToSuper'

export default function PhonoTable({ data, colTitles }) {
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
        <tbody>
          {data.map(item => (
            <tr key={item.entry}>
              <td>{item.entry}</td>
              <td>{item.IPA}</td>
              <ClickableCell>
                {item.example_chinese}{' '}
                <ToSuper inputTxt={item.example_romanisation} /> (
                {item.example_english})
              </ClickableCell>
              <td>{item.comments}</td>
            </tr>
          ))}
        </tbody>
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
