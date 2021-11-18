/* eslint-disable react/no-danger */
import styled from 'styled-components'

function numToSuperScript(inputStr) {
  return inputStr.replace(/([0-9])/g, '<sup>$&</sup>')
}

/* eslint-disable camelcase */
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
                <span
                  dangerouslySetInnerHTML={{
                    __html: numToSuperScript(item.example_romanisation),
                  }}
                />{' '}
                ({item.example_english})
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
