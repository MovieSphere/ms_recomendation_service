module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/tests/**/*.test.js'],
  // Asegúrate de ignorar otros servicios
  modulePathIgnorePatterns: [
    '<rootDir>/ms_catalog_search_service'
  ]
};