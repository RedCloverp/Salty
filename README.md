# Salty Bistro

Сайт ресторана Salty Bistro, созданный с использованием Vite.

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр собранной версии
npm run preview
```

## Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Настройка GitHub Pages:

1. Перейдите в Settings → Pages вашего репозитория
2. В разделе "Source" выберите "GitHub Actions"
3. При каждом push в ветку `main` сайт будет автоматически пересобираться и деплоиться

### Ручной деплой:

```bash
# Соберите проект
npm run build

# Содержимое папки dist нужно загрузить на GitHub Pages
```

## Структура проекта

- `index.html` - главная страница
- `style.css` - стили
- `main.js` - основная логика
- `reservation.js` - функционал бронирования
- `vite.config.js` - конфигурация Vite для GitHub Pages