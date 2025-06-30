const { getRecommendations } = require('../src/index');

describe('Servicio de Recomendaciones', () => {
  // Usar un ID que exista en tus datos
  test('Debería retornar recomendaciones para usuario conocido', () => {
    const results = getRecommendations('user-123'); // Cambiado a ID existente
    console.log('Resultados obtenidos:', results); // Debug
    expect(results.length).toBeGreaterThan(0);
  });

  test('Debería retornar array vacío para usuario desconocido', () => {
    const results = getRecommendations('usuario-inexistente');
    expect(results).toEqual([]);
  });
});