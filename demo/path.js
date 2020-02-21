const path = require("path")


console.log(`name file ${path.basename(__filename)}`)
console.log(`name folder ${path.dirname(__filename)}`)
console.log(`extname ${path.extname(__filename)}`)
console.log(`pars ${path.parse(__filename).name}`)
console.log(path.join(__dirname, 'server', 'index.html'))
