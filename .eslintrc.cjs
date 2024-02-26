module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
                project: null
            }
        },
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: ['react'],
    rules: {
        // Reglas para hacer TypeScript más restrictivo
        '@typescript-eslint/explicit-function-return-type': 'error', // Requiere que todas las funciones tengan un tipo de retorno explícito
        '@typescript-eslint/explicit-module-boundary-types': 'error', // Requiere que los tipos de retorno y de argumentos de las funciones exportadas se declaren explícitamente
        '@typescript-eslint/no-explicit-any': 'error', // Prohibe el uso de 'any' como tipo
        '@typescript-eslint/no-unused-vars': 'error', // Prohibe variables no utilizadas
        '@typescript-eslint/no-unused-expressions': 'error', // Prohibe expresiones no utilizadas
        '@typescript-eslint/no-non-null-assertion': 'error', // Prohibe el uso de la no-assertion assertion operator (!)
        '@typescript-eslint/strict-boolean-expressions': 'error', // Enforce booleanish expressions to be of boolean type
        '@typescript-eslint/strict-null-checks': 'error', // Prohibe valores nulos a menos que se especifique explícitamente
        '@typescript-eslint/restrict-plus-operands': 'error', // Agrega la regla para restringir el uso del operador de suma con tipos no permitidos
        '@typescript-eslint/strict-null-checks': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',

        // Reglas personalizadas
        '@typescript-eslint/indent': ['error', 4], // Indentaciones de 2 espacios
        '@typescript-eslint/semi': ['error', 'always'],
        'react/jsx-no-target-blank': 'off' // Deshabilitar la regla jsx-no-target-blank
    }
};
