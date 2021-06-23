# Flappy-Bird
> Пример реализации игры Flappy-Bird в связке с server side rendering.

## [Demo](https://flappy-bird-bucharest.herokuapp.com) - ссылка на демонстрацию приложения

## Установка

    git clone https://github.com/Bucharest-team/flappy-bird.git
    cd flappy-bird
    npm install
    
    Для работы https в postinstall установлен скрипт, который запускается после npm install

## Настройка окружения
    Для работы с базой данных создать у себя локально файл dev.env настройками:
    
    DATABASE_URL=postgres://postgres:newPassword@postgres:5432/flappy-db
    NODE_ENV=development
    PORT=5000
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=newPassword
    POSTGRES_DB=flappy-db

## Запуск

    npm start - dev server для локальной разработки
    docker:start - сборка и запуск докер контейнеров
    docker:build - ребилд докер образов
    docker:stop - остановка всех контейнеров

### Приложение доступно по адресу

    Локально:
    https://localhost:443
    https://bucharest-flappy-bird-5.ya-praktikum.tech:443
    
    Через докер контейнер:
    https://localhost:5000
    https://bucharest-flappy-bird-5.ya-praktikum.tech:5000

    
## Сборка для production

    npm run build

## Языки & инструменты

### TypeScript

-   [React](http://facebook.github.io/react) используется для пользовательского интерфейса
-   [Redux Toolkit](https://redux-toolkit.js.org/) используется для управления состоянием приложения
-   [Emotion](https://emotion.sh/docs/introduction) используется для стилизации компонентов
-   [Material UI](https://material-ui.com/ru/) в качестве основного UI Kit
