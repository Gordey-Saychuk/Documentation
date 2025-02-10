"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1724],{5637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"tutorial-extras/manage-docs-versions","title":"Telegram \u0432\u0438\u0434\u0436\u0435\u0442","description":"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 TelegramLoginButton bot_id \u043c\u0435\u043d\u044f\u0435\u043c \u043d\u0430 id \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430 \u0434\u0430\u043b\u044c\u0448\u0435 \u0432\u0456\u0437\u0432\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u043d\u0443\u0436\u043d\u043e \u043c\u0435\u0441\u0442\u0435","source":"@site/docs/tutorial-extras/manage-docs-versions.md","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/manage-docs-versions","permalink":"/docs/tutorial-extras/manage-docs-versions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/manage-docs-versions.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 Telegram \u0432\u0438\u0434\u0436\u0435\u0442","permalink":"/docs/category/\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f-\u0447\u0435\u0440\u0435\u0437-telegram-\u0432\u0438\u0434\u0436\u0435\u0442"},"next":{"title":"Translate your site","permalink":"/docs/tutorial-extras/translate-your-site"}}');var r=n(4848),s=n(8453);const o={sidebar_position:1},i="Telegram \u0432\u0438\u0434\u0436\u0435\u0442",c={},l=[{value:"\u0414\u0430\u043b\u0435\u0435 \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0441\u0430\u043c\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u0442\u0433",id:"\u0434\u0430\u043b\u0435\u0435-\u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c-\u0441\u0430\u043c\u0443-\u043a\u043d\u043e\u043f\u043a\u0443-\u0442\u0433",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"telegram-\u0432\u0438\u0434\u0436\u0435\u0442",children:"Telegram \u0432\u0438\u0434\u0436\u0435\u0442"})}),"\n",(0,r.jsx)(t.p,{children:"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 TelegramLoginButton bot_id \u043c\u0435\u043d\u044f\u0435\u043c \u043d\u0430 id \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430 \u0434\u0430\u043b\u044c\u0448\u0435 \u0432\u0456\u0437\u0432\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u043d\u0443\u0436\u043d\u043e \u043c\u0435\u0441\u0442\u0435"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="auth.jsx"',children:'import { useEffect } from "react";\nimport { BASE_URL } from "../../utils/static";\nimport axios from "axios";\nimport telegrammIcon from "/public/telegramIcon.svg";\nimport { toast } from "react-toastify";\nimport { useNavigate } from "react-router-dom";\n\nconst TelegramLoginButton = () => {\n  const navigate = useNavigate();\n  const styles = {\n    container: {\n      display: "flex",\n      padding: "10px",\n      justifyContent: "center",\n      alignItems: "center",\n      backgroundColor: "#f5f5dc00",\n      fontSize: "large",\n      color: "#c29366",\n    },\n  };\n\n  useEffect(() => {\n    const params = getQueryParams();\n    if (params.id) {\n      handleTelegramAuth(params);\n    } else if (params.tgAuthResult) {\n      const data = JSON.parse(atob(params.tgAuthResult)); // \u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430 base64\n      handleTelegramAuth(data);\n    }\n  }, []);\n\n  const getQueryParams = () => {\n    return Object.fromEntries(new URLSearchParams(window.location.search));\n  };\n\n  //   // \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 Telegram \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\n  const handleTelegramAuth = async (data: any) => {\n    console.log("userData", data);\n    let attempts = 0;\n    const maxAttempts = 3;\n\n    while (attempts < maxAttempts) {\n      try {\n        const response = await axios.post(`${BASE_URL}/auth`, data);\n\n        if (response.status === 200) {\n          const token = response.headers["authorization"];\n          if (token) {\n            localStorage.setItem("token", token);\n            toast.success("Logged in via Telegram");\n            // setTimeout(() => navigate("/", { replace: true }), 500);\n            navigate("/", { replace: true });\n            setTimeout(() => window.location.reload(), 100);\n\n\n            return;\n          } else {\n            toast.error("Token not received");\n            return;\n          }\n        }\n      } catch (error) {\n        attempts++;\n        console.error(`Attempt ${attempts} failed:`, error);\n\n        if (attempts >= maxAttempts) {\n          toast.error("Telegram login failed after multiple attempts");\n        } else {\n          await new Promise((resolve) => setTimeout(resolve, 1000 * attempts)); // \u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u043c \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0443 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u043f\u044b\u0442\u043a\u0430\u043c\u0438\n        }\n      }\n    }\n  };\n\n\n  useEffect(() => {\n    const script = document.createElement("script");\n    script.src = `https://telegram.org/js/telegram-widget.js?22`;\n    script.async = true;\n    script.setAttribute("data-telegram-login", "myarcane_bot");\n    script.setAttribute("data-size", "large");\n    script.setAttribute("data-auth-url", `https://myarcane.terrapay.online/login`);\n    script.setAttribute("data-request-access", "write");\n    script.setAttribute("data-userpic", "false");\n\n    const container = document.getElementById("telegram-login-container");\n    if (container) {\n      container.innerHTML = "";\n      container.appendChild(script);\n    }\n  }, []);\n\n  const handleTelegramLogin = () => {\n    if ((window as any).Telegram?.Login) {\n      (window as any).Telegram.Login.auth(\n        { bot_id: "7505788560", request_access: true },\n        (data: any) => {\n          if (!data) {\n            toast.error("Telegram login failed");\n            return;\n          }\n          handleTelegramAuth(data);\n        }\n      );\n    } else {\n      toast.error("Telegram API \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d");\n    }\n  };\n\n\n  return (\n    <div className="flex  justify-center items-center">\n      <div id="telegram-login-container"></div>\n\n\n\n   <button\n         id="telegram-login-container"\n         style={styles.container}\n         onClick={handleTelegramLogin}\n       >\n         \u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0448\u044c\u044e Telegram\n       </button>\n\n       <img style={{ width: "40px", height: "35px" }} src={telegrammIcon}></img>\n\n\n\n\n\n\n\n    </div>\n\n\n  );\n};\n\nexport default TelegramLoginButton;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u0434\u0430\u043b\u0435\u0435-\u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c-\u0441\u0430\u043c\u0443-\u043a\u043d\u043e\u043f\u043a\u0443-\u0442\u0433",children:"\u0414\u0430\u043b\u0435\u0435 \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0441\u0430\u043c\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u0442\u0433"}),"\n",(0,r.jsx)(t.p,{children:"\u0412 index.css"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="auth.jsx"',children:"#telegram-login-container {\n  display: none;\n}\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);