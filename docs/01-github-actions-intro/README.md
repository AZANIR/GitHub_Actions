# Модуль 01: GitHub Actions — вступ

Матеріали для студентів курсу **«Автомейшен тестери»**: що таке GitHub Actions, як влаштований workflow, основні поняття (events, jobs, steps, actions, runners).

## Що таке GitHub Actions

- **GitHub Actions** — платформа CI/CD прямо в репозиторії GitHub.
- Дозволяє автоматизувати збірку, тестування та розгортання без обов'язкових зовнішніх сервісів.
- Cypress, Playwright та інші E2E-фреймворки можна запускати в GitHub Actions через YAML workflow.
- Достатньо створити файл workflow у репозиторії (зазвичай `.github/workflows/*.yml`).

## Основні поняття

| Поняття | Опис |
|--------|------|
| **Workflow** | Настроюваний автоматизований процес з одним або кількома jobs. Опис у YAML у `.github/workflows/`. Запуск: подія в репо, ручний запуск (`workflow_dispatch`) або розклад (`schedule`). |
| **Event** | Подія в репозиторії, яка запускає workflow: `push`, `pull_request`, `issues`, `release`, `fork`. Можна фільтрувати за гілками та шляхами. |
| **Job** | Набір steps на **одному** runner. Кроки виконуються по порядку. Jobs за замовчуванням паралельні; залежність — через `needs`. |
| **Step** | Один крок у job: або скрипт (`run`), або готова **action** (`uses`). |
| **Action** | Перевикористовуваний скрипт для GitHub Actions (checkout, setup-node, cypress-io/github-action тощо). |
| **Runner** | Сервер, на якому виконується job. GitHub-hosted: Ubuntu, Windows, macOS; кожен run — нова VM. |

## Тарифіка та ліміти

- Безкоштовно: публічні репозиторії на стандартних GitHub-hosted runners.
- Приватні репо: обмежена кількість хвилин залежно від плану.
- Деталі: [Billing for GitHub Actions](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

## Приклади

У папці [examples](./examples/) знаходяться:

- **minimal-workflow.yml** — мінімальний workflow з одним job і двома steps (checkout + run).
- **job-with-outputs.yml** — приклад job з виходами (`outputs`) для передачі даних іншим jobs.
- **manual-and-schedule.yml** — запуск вручну (`workflow_dispatch`) та за розкладом (`schedule`).

Рекомендовано відкрити ці файли та запустити відповідний workflow у своєму форку репозиторію.
