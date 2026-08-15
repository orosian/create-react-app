#!/usr/bin/env node

import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const SKIP = new Set(['node_modules', 'dist', '.git', 'bin', '.claude'])

const name = process.argv[2]

if (!name || name === '.' || name === '..') {
  console.error('用法: npx github:orosian/create-react-app <项目名>')
  process.exit(1)
}

const cwd = process.cwd()
const dest = resolve(cwd, name)

if (!name.startsWith('/') && (dest === cwd || !dest.startsWith(`${cwd}/`))) {
  console.error('项目名必须是当前目录下的相对路径')
  process.exit(1)
}

if (existsSync(dest)) {
  console.error(`${name} 已存在`)
  process.exit(1)
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

cpSync(root, dest, {
  recursive: true,
  filter(src) {
    const rel = relative(root, src)
    if (!rel) return true
    return !SKIP.has(rel.split(/[/\\]/)[0])
  },
})

const pkgPath = join(dest, 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
const appName = name.split(/[/\\]/).at(-1)

pkg.name = appName
pkg.private = true
pkg.version = '0.0.0'
delete pkg.bin
delete pkg.files
delete pkg.publishConfig
delete pkg.repository
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)

if (!existsSync(join(dest, '.agents', 'skills'))) {
  console.error('模版缺少 .agents/skills，无法创建 Claude Code 技能链接')
  process.exit(1)
}

mkdirSync(join(dest, '.claude'), { recursive: true })
symlinkSync('../.agents/skills', join(dest, '.claude', 'skills'))

writeFileSync(
  join(dest, 'README.md'),
  `# ${appName}

日常开发约定见 \`AGENTS.md\`。

\`\`\`bash
npm install
npm run dev
\`\`\`
`,
)

console.log(`已创建 ${name}`)
console.log(`接下来: cd ${name} && npm install`)
