// Конфігурація Cypress для E2E тестів.
// baseUrl можна перевизначити через змінну середовища CYPRESS_baseUrl або в CI (env у workflow).

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: process.env.baseUrl || 'https://example.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    // Таймаут для команд (наприклад visit)
    defaultCommandTimeout: 10000,
    // Кількість спроб при падінні (retry)
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // Можна додати обробники подій (лог, зміна конфігу)
      return config;
    },
  },
});
