# 开发约定

壳和栈已经定了。只加功能，不要换库，不要新造 layout。

**栈：** Vite + React + TS · React Router（`createBrowserRouter` + `<Outlet />`）· Tailwind + `src/styles/tokens.css` · shadcn（`src/components/ui/`）· React Hook Form + Zod + `zodResolver` · TanStack Query / Table · Lucide。

不要引入 Ant Design、MUI、Formik、Redux。

## 往哪写

| 要做的事 | 写这里 |
|---|---|
| 新页面 | `src/pages/`，在 `App.tsx` 挂到**已有壳**的 `children` |
| 房间里的一屏 | `src/scenes/` |
| 侧栏 / 顶栏 / HUD / 对话列表 | 现有 `src/layouts/` 或 `src/components/chrome/` |
| 菜单 | `src/config/nav.ts`（`nav` / `marketingNav` / `chatNav`） |
| 房间阶段 | `src/config/phases.ts` |
| 按钮、输入、Dialog、Select | `src/components/ui/`；没有就 `npx shadcn add <name>` |

加路由只往已有壳塞 children。不要新建第六种 layout，不要在页面里再包 Sidebar / Header / HUD。

菜单图标放 Lucide **组件**，不要字符串 map。色板、间距、字体只改 `tokens.css`。

## 页面怎么写

管理台 / 官网 / 登录：

```tsx
<PageContainer>
  <PageHeader title="…" description="…" />
  {/* 本页内容。空数据用 EmptyState */}
</PageContainer>
```

对话页只写主栏（消息 + 输入）。列表和 Inspector 留在 `ChatShell`。

房间场景只写当前屏。不要包 `PageHeader`，HUD 留在 `StageShell`。

表单抄 `LoginPage`：`useForm` + `zodResolver`，不要裸 `Input`。

## 状态

| 种类 | 用什么 | 例子 |
|---|---|---|
| 服务端 / 异步 | TanStack Query | 列表、详情、提交、大厅 |
| URL | search params | tab、分页、筛选、选中 id |
| 表单 | RHF + Zod | 创建 / 编辑 |
| 局部 UI | `useState` | 弹层、hover |
| 跨树客户端 | Zustand（按需才加） | 主题、侧栏折叠、当前用户 |
| 房间实时 | Zustand + WebSocket | 阶段、座位、谁出局 |

不要 `useEffect` + `fetch`。不要把接口数据或表单值塞进 Zustand。大厅用 Query，进行中的房间才用 store。

组件不要堆 `isSidebar` / `isMobileLayout` 这类布尔布局 prop，用组合。详见 `.agents/skills/composition-patterns`。有 PRD / `总体规划.md` 时走 `dev-progress`。观感可参考 `frontend-design`，但 token 和 `ui/` 仍按上表。
