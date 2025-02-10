---
sidebar_position: 1
---

# Telegram виджет

Для начала на странице где требуется виджет добавим useEffect в data-telegram-login меняем на название вашего бота ТГ, а в data-auth-url вставляемм ссылку на страницу на которой находится виджет

```jsx title="auth.jsx"
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://telegram.org/js/telegram-widget.js?22';
  script.async = true;
  script.setAttribute('data-telegram-login', 'название-вашего-бота');
  script.setAttribute('data-size', 'large');
  script.setAttribute('data-auth-url', 'ссылку-на-страницу-на-которой-находится-виджет');
  script.setAttribute('data-request-access', 'write');
  script.setAttribute('data-userpic', 'false');

  const container = document.getElementById('telegram-login-container');
  if (container) {
    container.innerHTML = '';
    container.appendChild(script);
  }
}, []);
```

## Далее добавляем саму кнопку

В jsx разметку в нужное место добавляем контейнер с кнопкой:

```jsx title="auth.jsx"
<div className={classes.telegrams} id="telegram-login-container"></div>
```

## Дальше получаем данные из параметров URL которые нам вернул ТГ виджет

Функция getQueryParams() возвращает объект, где ключами являются названия параметров в URL, а значениями — их значения в виде строк.

Извлекаем параметры из URL.
Если в URL есть id, сразу передаём все параметры в handleTelegramAuth().
Если id нет, но есть tgAuthResult, расшифровываем Base64-строку, превращаем её в объект и передаём в handleTelegramAuth().

handleTelegramAuth() - ваша функция которая передает данные тг пользователя на сервер, ее реализуйте сами

```jsx title="auth.jsx"
const getQueryParams = () => {
  return Object.fromEntries(new URLSearchParams(window.location.search));
};

useEffect(() => {
  const params = getQueryParams();

  if (params.id) {
    handleTelegramAuth(params);
  } else if (params.tgAuthResult) {
    const data = JSON.parse(atob(params.tgAuthResult));
    handleTelegramAuth(data);
  }
}, []);
```
