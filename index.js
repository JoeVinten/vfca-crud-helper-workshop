// adding promises here gets the promises version of it
// const fs = require('fs').promises

import { readFile, appendFile } from "./helpers.js"



export const createItems = async (fileName, item) => {
  await appendFile(fileName, `${item}\r\n`)
  return await readFile(fileName)
}

export const readItems = async (fileName) => {
  return await readFile(fileName)
}

export const updateItems = (fileName, targetItem, newItem) => {}

export const deleteItems = (fileName, targetItem) => {}

// createItems(fileName, item)

// readItems(fileName, index)

// updateItems(fileName, targetItem, newItem)

// deleteItems(fileName, targetItem)

// readFile(process.argv['animals'])
console.log(await createItems(process.argv[2], process.argv[3]))