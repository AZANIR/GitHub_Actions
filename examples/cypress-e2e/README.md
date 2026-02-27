# Cypress E2E — навчальний приклад

Мінімальний робочий Cypress-проект для курсу «Автомейшен тестери». Тести відкривають [example.com](https://example.com) і перевіряють заголовок та текст.

## Структура

- `cypress.config.js` — конфігурація Cypress (baseUrl, viewport, video, retries).
- `cypress/e2e/smoke.cy.js` — smoke-тести.
- `cypress/e2e/basic.cy.js` — базові перевірки сторінки.

## Локальний запуск

```bash
# Встановити залежності
npm install

# Відкрити Cypress UI
npm run cy:open

# Запустити тести в headless (термінал)
npm run cy:run

# Запуск у Chrome (як у CI)
npm run e2e:ci
```

## Запуск у GitHub Actions

Workflow з папки `docs/03-yaml-cypress/examples/` очікують Cypress-проект у `examples/cypress-e2e`. Додайте один із YAML-файлів у `.github/workflows/` у корені репозиторію.
