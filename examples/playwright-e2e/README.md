# Playwright E2E — навчальний приклад

Мінімальний робочий Playwright-проект для курсу «Автомейшен тестери». Тести відкривають [example.com](https://example.com) і перевіряють заголовок та текст.

## Структура

- `playwright.config.ts` — конфігурація (baseURL, reporter html, браузери chromium/firefox).
- `tests/smoke.spec.ts` — smoke-тести.
- `tests/basic.spec.ts` — базові перевірки сторінки.
- Після прогону: `playwright-report/` — HTML-звіт.

## Локальний запуск

```bash
# Встановити залежності
npm install

# Встановити браузери (один раз)
npx playwright install

# Запустити тести
npm run test

# Відкрити звіт після прогону
npm run report
```

## Запуск у GitHub Actions

Workflow з папки `docs/04-yaml-playwright/examples/` очікують Playwright-проект у `examples/playwright-e2e`. Додайте один із YAML-файлів у `.github/workflows/` у корені репозиторію. У CI використовується `npx playwright install --with-deps` (або образ Docker з уже встановленими браузерами).
