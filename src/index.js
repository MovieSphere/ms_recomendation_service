const { log } = require('./logger');

// Datos de ejemplo para recomendaciones
const recommendationData = {
  // Asegúrate que 'user1' exista en tus datos
  'user1': [
    { id: 'rec-1', name: 'Producto Recomendado A', score: 0.9 },
    { id: 'rec-2', name: 'Producto Recomendado B', score: 0.85 }
  ],
  'user-123': [
    { id: 'prod-1', name: 'Laptop Premium', score: 0.9 }
  ]
};

exports.getRecommendations = (userId) => {
  // Verifica que los datos se estén leyendo correctamente
  console.log('Buscando recomendaciones para:', userId);
  console.log('Datos disponibles:', Object.keys(recommendationData));
  
  return recommendationData[userId] || [];
};

// Handler para AWS Lambda (misma estructura)
exports.handler = async (event) => {
  const userId = event.queryStringParameters?.userId;
  const recommendations = exports.getRecommendations(userId);
  
  return {
    statusCode: 200,
    body: JSON.stringify(recommendations)
  };
};

