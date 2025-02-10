---
sidebar_position: 2
---

# Навигация в Telegram WebApp

В основном на проектах в качестве навигации используется стрелочка назад, но в Telegram WebApp есть хедер в котором тоже можно реализовать эту навигацию а обычную скрывать для Telegram WebApp

## Теперь нам нужно создать компонент который будет поддерживать навигацию как для Telegram WebApp так и для обычного сайта

Create file `Back.jsx`:

Тут мы используем предыдущий метод для определения находится ли человек в Telegram WebApp и если он там то показываем стрелочку назад а обычную браузерную навигацию не показываем

```jsx title="Back.jsx"
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../../assets/icons/arrow_left_big.svg';
import arrow_alter from '../../assets/icons/arrow_left_big_alter.svg';
import { useTelegram } from '@/hooks/useTelegram';
import classes from './arrowBack.module.css';

export default function ArrowBack(props) {
  const { isTelegramApp } = useTelegram();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTelegramApp) {
      const backButton = window.Telegram.WebApp.BackButton;

      backButton.show();
      backButton.onClick(() => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          navigate('/');
        }
      });

      return () => {
        backButton.hide();
        backButton.offClick();
      };
    }
  }, [isTelegramApp, navigate]);

  function switchIcon() {
    switch (props.icon) {
      case 'regular':
        return arrow;
      case 'alter':
        return arrow_alter;
      default:
        return arrow;
    }
  }

  if (isTelegramApp) return null;

  return (
    <div className={classes.backWrapper + ' regular-padding'}>
      <Link to={props.target} className={classes.mainFrame}>
        <img src={switchIcon()} alt="icon" />
      </Link>
      <h1 className={classes.title}>{props.name}</h1>
    </div>
  );
}
```
