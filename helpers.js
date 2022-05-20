import fs from 'fs/promises'

// read the file
// adding utf8 is a middleware which allows us to shows how we encode that data
// this structure can create callback hell

// fs.readFile('./data/animals.csv', 'utf8', (err, data) => {
//   if(err) throw err
//   console.log(data)
// })


// CREATE
export const appendFile = (fileName, item) => {
  if(!fileName) throw 'The fileName is missing!'
  if(!item) throw 'The item is missing!'
  return fs.appendFile(`./data/${fileName}.csv`, `${item}`)
}

// READ
export const readFile = async (fileName) => {
  if(!fileName) throw 'The fileName is missing!'
  // await is implicit in the return here
  return fs.readFile(`./data/${fileName}.csv`, 'utf8')
}

// UPDATE
export const updateFile = () => {}



