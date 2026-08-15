# create-react-app

面向 AI 的前端初始化模版。日常开发约定在 `AGENTS.md`。

## 新建项目

```bash
npx --yes github:orosian/create-react-app <name>
cd <name>
npm install
```

不要用 `create-vite` + `shadcn init` 现场拼。命令必须非交互；不要在初始化时起 `dev` 服务器。

发布到 npm 之后也可以：

```bash
npm create @orosian/app@latest <name>
```

## 初始化后

1. 按产品保留一个主壳，删掉其余 layout / 对应路由。
2. 信息产品改 `src/config/nav.ts`（`nav` / `marketingNav` / `chatNav`）；桌游 / 开黑房改 `src/config/phases.ts`。
3. 页面只写 `PageHeader` 以下的内容；`StageShell` 只写 `src/scenes/`。
4. 停下来问要做什么内容。不要生成假 CRUD。

## 五个壳

| 壳 | 路由示例 | 用途 |
|---|---|---|
| AppShell | `/` | 管理台 |
| AuthShell | `/login` | 登录 |
| MarketingShell | `/welcome` | 官网 |
| ChatShell | `/chat` | 对话 |
| StageShell | `/room` | 桌游 / 直播间 |

## 栈

Vite + React + TS、Tailwind v4、shadcn/ui、React Router、TanStack Query。Zustand 按需再加。
