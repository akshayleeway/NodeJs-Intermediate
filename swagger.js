// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'learning documentYour API Documentation',
      version: '1.0.0',
      description: 'Documentation for your APIs',
    },
  },
  apis: ['./routers/*.js'], // Path to your route files
};

module.exports = swaggerJSDoc(options);
