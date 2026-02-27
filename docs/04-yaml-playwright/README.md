# Модуль 04: YAML для Playwright у GitHub Actions

Playwright — сучасний фреймворк для E2E-тестів з підтримкою кількох браузерів і мов. У GitHub Actions тести запускають через кроки: checkout, setup-node, install залежностей, install браузерів Playwright, run тестів; звіти зручно зберігати як артефакти.

## Базовий workflow

Типова послідовність:

1. **actions/checkout@v4** — отримати код.
2. **actions/setup-node@v3** — встановити Node.js (наприклад 18 або 20).
3. **npm ci** — встановити залежності проекту.
4. **npx playwright install --with-deps** — встановити браузери Playwright та системні залежності.
5. **npx playwright test** — запустити тести.
6. **actions/upload-artifact** — зберегти HTML-звіт (наприклад `playwright-report/`). Використовувати `if: always()` або `if: failure() || success()`, щоб артефакт завантажувався і при успіху, і при падінні.

Запуск при **push** та **pull_request** на гілках `main` / `master` — типовий варіант для CI.

## Запуск у Docker

Офіційний образ Microsoft `mcr.microsoft.com/playwright:v1.xx.x-jammy` містить уже встановлені браузери. У job додати `container.image`. Версію образу варто узгоджувати з версією Playwright у проекті. У контейнері не потрібно виконувати `playwright install --with-deps` — лише `npm ci` та `npx playwright test`.

## HTML-звіт

За замовчуванням HTML-звіт Playwright не відображається інтерактивно на GitHub (лише артефакт у вигляді файлів). Варіанти: зберігати звіт як артефакт і завантажувати локально для перегляду; або публікувати на сторонньому хостингу. Шлях до звіту залежить від конфігурації reporter у проекті (наприклад `playwright-report/` або `html/report`).

## Приклади

У папці [examples](./examples/):

- **playwright-basic.yml** — базовий workflow: Node, npm ci, playwright install, test, upload звіту.
- **playwright-docker.yml** — запуск у контейнері Microsoft Playwright.
- **playwright-artifact-report.yml** — акцент на збереженні HTML-звіту та завантаженні в інший job (за потреби).

Скопіюйте потрібний файл у `.github/workflows/` і вкажіть правильну робочу директорію (наприклад `examples/playwright-e2e`).
