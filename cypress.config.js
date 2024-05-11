const { defineConfig } = require("cypress");
// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)
  if(!fs.existsSync(pathToConfigFile)){
    console.log('There is no custom file found')
    return {}
  }

  return fs.readJson(pathToConfigFile)
}
module.exports = defineConfig({
  viewportHeight:1400,
  viewportWidth:1600,
  video:false,
  env:{
    USERNAME:'Admin',
    PASSWORD:'admin123',
    host:'https://opensource-demo.orangehrmlive.com'
  },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
  configFile: 'reporter-config.json',
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    },
    baseUrl:'https://opensource-demo.orangehrmlive.com',
    specPattern:'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
