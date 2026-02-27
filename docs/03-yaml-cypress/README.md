# Модуль 03: YAML для Cypress у GitHub Actions

Cypress — популярний фреймворк для E2E-тестів. Офіційна action `cypress-io/github-action` дозволяє запускати тести в CI без складної настройки. У цьому модулі: базовий запуск, браузери, Docker, env, артефакти, Cypress Cloud і паралелізація.

## Базовий запуск

Мінімальний workflow: checkout + `cypress-io/github-action`. Без параметра `browser` тести йдуть у **Electron**.

## Браузери

- **chrome**, **firefox**, **edge** — передати через `with.browser`.
- Якщо не вказувати — використовується Electron.

## Режим headed

За замовчуванням Cypress у CI працює в headless. Для відлагодження: `headed: true`.

## Docker

Офіційний образ `cypress/browsers` з уже встановленими браузерами. У job додати `container.image: cypress/browsers:latest` та опційно `options: --user 1001`.

## Змінні середовища

- Параметр **env** action: рядок через кому, наприклад `env: host=api.dev.local,port=4222`.
- Глобальні змінні — на рівні job/workflow у блоці `env:`. Секрети зберігати в **Secrets** репозиторію, не в YAML.

## Запуск конкретних spec-файлів

- **spec** — один файл або кілька (через пробіл/перенос), можна glob, наприклад `cypress/e2e/spec1.cy.js` або `cypress/**/*-b.cy.js`.

## Кастомна команда

Якщо тести запускаються через скрипт з package.json (наприклад `npm run e2e:ci`), використовувати `command: npm run e2e:ci`. При використанні **command** інші параметри action (browser, spec, record тощо) **ігноруються**.

## Cypress Cloud (record)

- **record: true** + секрети `CYPRESS_RECORD_KEY` та `GITHUB_TOKEN` (або PAT) для ідентифікації збірки.
- Додавання секретів: Settings → Security → Secrets and variables → Actions → New repository secret.

## Артефакти

Після прогону зберегти відео та скріншоти: `actions/upload-artifact` з `path: cypress/screenshots` та `path: cypress/videos`. Щоб завантажувати лише при падінні — `if: failure()`.

## Паралелізація (matrix + Cypress Cloud)

Для паралельного запуску потрібен Cypress Cloud: **record: true**, **parallel: true**, **group**. **strategy.matrix** задає кількість контейнерів; `fail-fast: false` — не зупиняти інші при падінні одного. При re-run варто генерувати унікальний **ci-build-id** (наприклад у окремому job через `echo "value=..." >> $GITHUB_OUTPUT`).

## Приклади

У папці [examples](./examples/):

- **cypress-basic.yml** — мінімальний запуск Cypress при push.
- **cypress-chrome.yml** — запуск у Chrome.
- **cypress-docker.yml** — запуск у контейнері cypress/browsers.
- **cypress-artifacts.yml** — збереження скріншотів та відео як артефакти.
- **cypress-env-and-spec.yml** — передача env та запуск конкретного spec.

Скопіюйте потрібний файл у `.github/workflows/` і вкажіть правильні шляхи до тестів у вашому репо (наприклад `examples/cypress-e2e`).
