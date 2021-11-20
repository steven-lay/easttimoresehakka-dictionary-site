import { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Dropdown({ heading, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownHeading>
        <span>{heading}</span>
        <MdOutlineKeyboardArrowDown />
      </DropdownHeading>
      {isOpen && (
        <DropdownItemList onClick={() => setIsOpen(false)}>
          {items.map(({ title, action }) => (
            <Dropdownitem key={title} onClick={action}>
              {title}
            </Dropdownitem>
          ))}
        </DropdownItemList>
      )}
    </DropdownContainer>
  )
}

const DropdownContainer = styled.div`
  cursor: pointer;
  position: relative;
  padding: 1rem;
`

const DropdownHeading = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: white;
`

const DropdownItemList = styled.ul`
  position: absolute;
  padding: 0.675rem 0;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
  color: black;
  list-style: none;
`

const Dropdownitem = styled.li`
  padding: 0.5rem;
  margin: 0 0.75rem;

  &:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 5px;
  }
`
