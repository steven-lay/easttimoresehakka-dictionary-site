// eslint-disable-next-line import/prefer-default-export
export function playAudio(path) {
  const audio = new Audio(path)
  audio.play()
}
