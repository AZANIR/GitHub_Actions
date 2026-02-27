# Модуль 02: YAML для GitHub Actions

Workflow в GitHub Actions описуються у форматі **YAML**. Розуміння основ YAML та структури workflow допомагає писати і підтримувати конфіги без помилок.

## Чому YAML

- **Читабельність** — відступи задають вкладеність.
- **Структуровані дані** — ієрархія зрозуміла і людині, і парсеру.
- **Мінімалізм** — менше дужок ніж у JSON/XML.
- **Коментарі** — вбудовані (`#`).
- Широко використовується в DevOps: Docker, Kubernetes, Ansible, GitHub Actions.

## Базова структура workflow

```yaml
name: <назва workflow>
on: <подія або список подій>
jobs:
  <job_id>:
    name: <назва job>
    runs-on: <ubuntu-latest | windows-latest | macos-latest | ...>
    steps:
      - name: <крок 1>
        run: |
          <команди>
      - name: <крок 2>
        uses: <action>
```

- **name** — відображається в інтерфейсі GitHub.
- **on** — коли запускати workflow (події та фільтри).
- **jobs** — один або кілька job; кожен має `runs-on` і `steps`.

## Події (on)

| Приклад | Опис |
|--------|------|
| `on: push` | Будь-який push у репозиторій. |
| `on: [push, fork]` | Кілька тригерів. |
| `on: push: branches: [main]` | Тільки push у гілку `main`. |
| `on: pull_request` | Відкриття/оновлення Pull Request. |
| `on: push: paths-ignore: ['docs/**']` | Не запускати при змінах лише в `docs/`. |
| `on: schedule: - cron: '0 6 * * *'` | За розкладом (cron у UTC). |

### Фільтри

- **branches** / **branches-ignore** — обмеження за гілками.
- **paths** / **paths-ignore** — обмеження за зміненими файлами.
- **types** (для `pull_request`, `issues` тощо) — `opened`, `closed`, `labeled` тощо.
- Символ **`!`** перед гілкою — виключення з тригеру (наприклад `!releases/**-alpha`).

## Приклади

У папці [examples](./examples/) знаходяться:

- **on-push-branches.yml** — запуск тільки при push у `main` / `master`.
- **on-pull-request.yml** — запуск при відкритті/синхронізації PR.
- **on-paths-ignore.yml** — ігнорування змін лише в `docs/` та `*.md`.
- **on-schedule.yml** — запуск за розкладом (cron).
- **on-workflow-dispatch.yml** — тільки ручний запуск з опціональним вводом.

Копіюйте потрібний файл у `.github/workflows/` і підлаштуйте під свій репозиторій.
