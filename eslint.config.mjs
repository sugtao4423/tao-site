// @ts-check

import eslint from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import configPrettier from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  pluginNext.flatConfig.coreWebVitals,
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  pluginImport.flatConfigs.recommended,
  { name: 'import/typescript', ...pluginImport.flatConfigs.typescript },
  { name: 'eslint-config-prettier', ...configPrettier },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': {
        typescript: { project: import.meta.dirname },
      },
    },
  }
)
