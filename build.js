const { exec } = require("child_process")
const fs = require('fs')


fs.writeFile(
   './api-routes/index.js',
   `module.exports = require('./routes${process.env.ROUTE}/${process.env.METHOD}')`,
   (err) => {
      if (err) throw err
      exec('ncc build ./api/index.js -m -o dist/api')
      exec('ncc build ./api-routes/index.js -m -o dist/api-routes')
   }
)
