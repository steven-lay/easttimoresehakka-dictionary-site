export function numToSuperScript(inputStr) {
  return inputStr.replace(/([0-9])/g, '<sup>$&</sup>')
}