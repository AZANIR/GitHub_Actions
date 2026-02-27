# GitHub Actions для E2E тестів

Навчальні матеріали для студентів курсу **«Автомейшен тестери»**: налаштування запуску автоматизованих E2E тестів у GitHub Actions для Cypress та Playwright.

## Про репозиторій

- **Документація** у `docs/` — чотири модулі з описом та прикладами YAML.
- **Приклади workflow** у `docs/0X-.../examples/` — готові YAML-файли для копіювання в `.github/workflows/`.
- **Робочі проєкти** у `examples/` — Cypress та Playwright з реальними тестами (example.com).
- **Робочі workflow** у `.github/workflows/` — запуск цих тестів при push/PR на `main` або `master`.
- **Презентації** у `prezentations/` — текстовий матеріал для лекцій.

## Зміст курсу

### Модуль 01: GitHub Actions — вступ

Що таке GitHub Actions, workflow, jobs, steps, events, runners, тарифіка.

![Модуль 01 — GitHub Actions вступ](src/01.png)

📁 [Документація](./docs/01-github-actions-intro/) | [Приклади](./docs/01-github-actions-intro/examples/)

---

### Модуль 02: YAML для workflow

Структура YAML, події (`on`), фільтри за гілками та шляхами, cron, ручний запуск.

![Модуль 02 — YAML для workflow](src/02.png)

📁 [Документація](./docs/02-yaml-workflows/) | [Приклади](./docs/02-yaml-workflows/examples/)

---

### Модуль 03: YAML для Cypress

Базовий запуск, браузери (Chrome, Firefox, Edge), Docker, env, spec, артефакти (відео/скріншоти), Cypress Cloud.

![Модуль 03 — YAML для Cypress](src/03.png)

📁 [Документація](./docs/03-yaml-cypress/) | [Приклади](./docs/03-yaml-cypress/examples/)

---

### Модуль 04: YAML для Playwright

Базовий workflow (Node, npm ci, playwright install, test), Docker-образ, HTML-звіт як артефакт.

![Модуль 04 — YAML для Playwright](src/04.png)

📁 [Документація](./docs/04-yaml-playwright/) | [Приклади](./docs/04-yaml-playwright/examples/)

---

## Швидкий старт

### Передумови

- **Node.js** >= 18 (для локального запуску тестів).
- Репозиторій на GitHub для запуску workflow.

### Локальний запуск Cypress

```bash
cd examples/cypress-e2e
npm install
npm run cy:run
# або npm run cy:open
```

### Локальний запуск Playwright

```bash
cd examples/playwright-e2e
npm install
npx playwright install
npm run test
```

### Запуск у GitHub Actions

Після push або створення Pull Request на гілку `main` або `master` автоматично запускаються:

- **E2E Cypress** — workflow `e2e-cypress.yml`
- **E2E Playwright** — workflow `e2e-playwright.yml`

Результати (відео, скріншоти, HTML-звіт) зберігаються як артефакти вкладки Actions.

## Структура проекту

```
GitHub_Actions/
├── .github/workflows/          # Робочі workflow для CI
│   ├── e2e-cypress.yml
│   └── e2e-playwright.yml
├── src/                        # Зображення для README (01–04.png)
├── docs/                       # Документація за темами
│   ├── 01-github-actions-intro/
│   │   ├── README.md
│   │   └── examples/
│   ├── 02-yaml-workflows/
│   ├── 03-yaml-cypress/
│   └── 04-yaml-playwright/
├── examples/                   # Робочі E2E проєкти
│   ├── cypress-e2e/
│   └── playwright-e2e/
├── prezentations/              # Текстові матеріали для лекцій
├── README.md
├── LICENSE
└── .gitignore
```

## Як використовувати

1. Вивчайте модулі по черзі **01 → 04**.
2. Читайте `docs/0X-.../README.md`, переглядайте приклади в `examples/`.
3. Копіюйте потрібні YAML з `docs/.../examples/` у `.github/workflows/` у своєму репо.
4. Запустіть приклади з `examples/cypress-e2e` та `examples/playwright-e2e` локально та переконайтеся, що workflow у CI проходять.

## Для кого

- Студенти курсів з автоматизованого тестування.
- QA-інженери, які налаштовують CI для Cypress або Playwright.

## Додаткові ресурси

- [GitHub Actions — документація](https://docs.github.com/en/actions)
- [Cypress — документація](https://docs.cypress.io)
- [Cypress GitHub Action](https://github.com/cypress-io/github-action)
- [Playwright — документація](https://playwright.dev/docs/intro)

## Ліцензія

MIT — див. [LICENSE](./LICENSE).
