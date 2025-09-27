const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Dokumentasi API Web Sekolah WR Supratman',
    version: '1.0.0',
    description: '',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1', 
      description: 'Untuk lokal development',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Tentukan path/folder di mana file API (misal: route siswa.js) kamu berada
  apis: ['./src/routes/*.js'], 
};

export default options;