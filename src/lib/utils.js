export function playAudio(path) {
  const audio = new Audio(path)
  audio.play()
}

export function numToSuper(inputStr) {
  return inputStr.replace(/([0-9])/g, '<sup>$&</sup>')
}
