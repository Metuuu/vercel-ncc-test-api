const chalk = require("chalk")


exports.handler = async () => {
   try {
      // Parse body param
      const bodyArgInxex = process.argv.findIndex((a) => a === '--body')
      const body = (bodyArgInxex !== -1)
         ? JSON.parse(process.argv[bodyArgInxex+1])
         : {}

      // Main
      const app = require(`../api-routes`, true)
      const response = await app(body)
      return chalk.green(response)
   } catch(err) {
      return chalk.red(`Error - ${err}`)
   }
}
