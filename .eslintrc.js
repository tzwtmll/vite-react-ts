module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // 继承ts规则
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': [1, {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 1, //导入顺序
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      //是否必须标签化
      0,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'jsx-a11y/click-events-have-key-events': 0, // 点击添加键盘监听
    'jsx-a11y/no-static-element-interactions': 0, // a 标签添加关联
    // 'jsx-a11y/rule-name': 1,
    'no-unused-vars': 1,
    'no-var': 1,
    '@typescript-eslint/no-explicit-any': 0, // 是否可以使用 any
    'prefer-const': 0, // 是否使用const
    'no-extra-boolean-cast': 0
  }
}
