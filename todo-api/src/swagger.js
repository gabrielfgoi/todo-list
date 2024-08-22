// src/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Configuração do Swagger JSDoc
const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo API',
            version: '1.0.0',
            description: 'Uma API para gerenciar tarefas.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
        ],
    },
    apis: [path.join(__dirname, 'routes/*.js')], // Ajuste o caminho conforme necessário
});

module.exports = { swaggerUi, swaggerSpec };
