import axios from 'axios'
import { numToSuperScript } from './utils'
import { variables } from './envVars'

export async function getSheetEntries() {
  const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${variables.SHEET_ID}/values/Dictionary/?alt=json&key=${variables.SHEET_API_KEY}`
  const res = await axios.get(sheetUrl)
  const data = res.data.values /* Assume no errors for now */

  let results = []

  data.shift() /* Get rid of header row */

  /* 
    row[0] = Romanisation
    row[1] = Chinese
    row[2] = English
    row[3] = Category
  */
  data.forEach((row) => {
    const obj = {
      entry: numToSuperScript(row[0]) + '<br/>' + row[1],
      definition: row[2],
      category: row[3],
    }
    results.push(obj)
  })

  // Get list of categories
  let newCategories = [...new Set(results.flatMap(({ category }) => category))].sort()

  return {
    results,
    newCategories
  }
}