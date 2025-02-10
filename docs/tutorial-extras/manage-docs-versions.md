---
sidebar_position: 1
---

# Telegram виджет

Для начала создаем компонент TelegramLoginButton bot_id меняем на id вашего бота и в data-auth-url вписываем url на страницы на которой находится кнопка в handleTelegramAuth прописуем ваше АПИ для авторизации дальше вызваем компонент в нужно месте

```jsx title="TelegramLoginButton.tsx"
import { useEffect } from "react";
import { BASE_URL } from "../../utils/static";
import axios from "axios";
import telegrammIcon from "/public/telegramIcon.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TelegramLoginButton = () => {
  const navigate = useNavigate();
  const styles = {
    container: {
      display: "flex",
      padding: "10px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5dc00",
      fontSize: "large",
      color: "#c29366",
    },
  };

  useEffect(() => {
    const params = getQueryParams();
    if (params.id) {
      handleTelegramAuth(params);
    } else if (params.tgAuthResult) {
      const data = JSON.parse(atob(params.tgAuthResult)); // Расшифровка base64
      handleTelegramAuth(data);
    }
  }, []);

  const getQueryParams = () => {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  };

  //   // Отправка данных Telegram на сервер
  const handleTelegramAuth = async (data: any) => {
    console.log("userData", data);
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        const response = await axios.post(`${BASE_URL}/auth`, data);

        if (response.status === 200) {
          const token = response.headers["authorization"];
          if (token) {
            localStorage.setItem("token", token);
            toast.success("Logged in via Telegram");
            // setTimeout(() => navigate("/", { replace: true }), 500);
            navigate("/", { replace: true });
            setTimeout(() => window.location.reload(), 100);


            return;
          } else {
            toast.error("Token not received");
            return;
          }
        }
      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed:`, error);

        if (attempts >= maxAttempts) {
          toast.error("Telegram login failed after multiple attempts");
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1000 * attempts)); // Увеличиваем задержку между попытками
        }
      }
    }
  };


  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://telegram.org/js/telegram-widget.js?22`;
    script.async = true;
    script.setAttribute("data-telegram-login", "myarcane_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-auth-url", `https://myarcane.terrapay.online/login`);
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-userpic", "false");

    const container = document.getElementById("telegram-login-container");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }
  }, []);

  const handleTelegramLogin = () => {
    if ((window as any).Telegram?.Login) {
      (window as any).Telegram.Login.auth(
        { bot_id: "7505788560", request_access: true },
        (data: any) => {
          if (!data) {
            toast.error("Telegram login failed");
            return;
          }
          handleTelegramAuth(data);
        }
      );
    } else {
      toast.error("Telegram API не загружен");
    }
  };


  return (
    <div className="flex  justify-center items-center">
      <div id="telegram-login-container"></div>



   <button
         id="telegram-login-container"
         style={styles.container}
         onClick={handleTelegramLogin}
       >
         Войти с помошью Telegram
       </button>

       <img style={{ width: "40px", height: "35px" }} src={telegrammIcon}></img>
    </div>
  );
};

export default TelegramLoginButton;
```

## Далее скрываем саму кнопку тг

В index.css

```jsx title="index.css"
#telegram-login-container {
  display: none;
}

```
