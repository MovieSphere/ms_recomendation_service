const { searchProducts } = require('../src/index');

describe('Servicio de Búsqueda', () => {
  test('Debería retornar 2 productos', () => {
    const results = searchProducts('laptop');
    expect(results).toHaveLength(2);
  });

  test('Los productos deben incluir el término buscado', () => {
    const results = searchProducts('monitor');
    expect(results[0].name).toContain('monitor');
  });
});
