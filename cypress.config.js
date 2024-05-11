const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1400,
  viewportWidth:1600,
  video:false,
  env:{
    USERNAME:'Admin',
    PASSWORD:'admin123',
    host:'https://opensource-demo.orangehrmlive.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://opensource-demo.orangehrmlive.com'
  },
});
