export default function ToSuper({ inputTxt }) {
  const split = inputTxt.match(/[a-zA-Z]+|[0-9]+|[\s]/g)

  const result = split.map((item, idx) => {
    if (!item.match(/^[0-9]+$/)) {
      return item
    }
    return <sup key={JSON.stringify(`${idx}${item}`)}>{item}</sup>
  })

  return <span>{result}</span>
}
