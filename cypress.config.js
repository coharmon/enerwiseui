const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6rqgmy',
  viewportWidth: 1800,
  viewportHeight: 1440,
  defaultCommandTimeout: 60000,
  int: {
    url_header: 'https://lmo-web-d-vm01.dmz.corp.cpwr.biz/ELMO/ELMO_WEB/',
    custConfigSiteID: '2',
    operSchedSiteID: '2',
    utilManagerSiteID: '2',
    seasAllocSiteID: '2',
    mthAllocSiteID: '2',
    simEngSiteID: '2',
  },
  stg: {
    url_header: 'https://lmo-web-s-vm01.dmz.corp.cpwr.biz/ELMO/ELMO_WEB/',
    custConfigSiteID: '2',
    operSchedSiteID: '2',
    utilManagerSiteID: '2',
    seasAllocSiteID: '2',
    mthAllocSiteID: '2',
    simEngSiteID: '2',
  },
  prod: {
    url_header: 'https://lmo.cpowerenergymanagement.com/ELMO/ELMO_WEB/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
