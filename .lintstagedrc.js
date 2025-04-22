import path from 'path'

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const formatCommand = 'prettier --write'

export default {
  '*.{js,jsx,ts,tsx}': [formatCommand, buildEslintCommand],
}
