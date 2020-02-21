const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//   console.log(`folder create`)
// })

const filePath = path.join(__dirname, 'test', 'test.txt')
// fs.writeFile(filePath, "hello me friends", err => {
//   if (err) {
//     throw err
//   }
//   console.log(`file create`)
// })
// fs.appendFile(filePath, "hello me friends", err => {
//   if (err) {
//     throw err
//   }
//   console.log(`file create`)
// })
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }
  //   const data = Buffer.from(content)
  console.log(content)
})
