---
sidebar_position: 1
---

# Проверка зашел ли человек через Telegram WebApp

## Реализация

Создай хук useTelegram для работы с Telegram WebApp :

```jsx title="hooks/useTelegram.js"
import { useEffect, useState } from 'react';

export const useTelegram = () => {
  const [isTelegramApp, setIsTelegramApp] = useState(false);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      setIsTelegramApp(true);
    }
  }, []);

  return { isTelegramApp };
};
```

## Используй этот хук в App или нужных компонентах

Create a file at `App.jsx`:

```jsx title="App.jsx"
import { useTelegram } from '@/hooks/useTelegram';

const App = () => {
  const { isTelegramApp } = useTelegram();

  return <div>{isTelegramApp ? <h1>Открыто через Telegram</h1> : <h1>Обычный браузер</h1>}</div>;
};

export default App;
```

isTelegramApp - твоя переменная с помощью которой ты можешь определять зашел ли человек через Telegram WebApp
